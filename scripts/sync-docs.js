const fs = require('fs-extra');
const { globSync } = require('node:fs');
const path = require('path');
const { docsBasePath, applyDocsBasePath } = require('./docs-base-path');

console.log('📋 Syncing documentation assets...');

// Define paths
const docsPath = path.join(__dirname, '../docs');
const docsScriptsPath = path.join(docsPath, 'scripts');
const docsBritechartsScriptsPath = path.join(docsPath, 'britecharts/scripts');
const demosPath = path.join(__dirname, '../demos');
const demosBuildPath = path.join(demosPath, 'build');

// Ensure directories exist
fs.ensureDirSync(docsScriptsPath);
fs.ensureDirSync(docsBritechartsScriptsPath);

// Copy demo files to docs/britecharts/scripts/
console.log('📦 Copying demo JavaScript files...');
try {
    if (fs.existsSync(demosBuildPath)) {
        const demoFiles = fs.readdirSync(demosBuildPath);
        demoFiles.forEach(file => {
            if (file.endsWith('.js')) {
                fs.copySync(
                    path.join(demosBuildPath, file),
                    path.join(docsBritechartsScriptsPath, file),
                    { overwrite: true }
                );
            }
        });
        console.log(`  ✓ Copied ${demoFiles.filter(f => f.endsWith('.js')).length} demo JavaScript files`);
    } else {
        console.log('  ⚠️  Demos not built yet. Run "yarn demos:compile" first.');
    }
} catch (err) {
    console.error('❌ Error copying demo files:', err);
}

// Copy demo HTML files to docs
console.log('📦 Copying demo HTML files...');
try {
    const demoHtmlFiles = globSync(path.join(demosPath, '*.html'));
    demoHtmlFiles.forEach(file => {
        const fileName = path.basename(file);
        const destPath = path.join(docsPath, `tutorial-${fileName}`);
        fs.copySync(file, destPath, { overwrite: true });
    });
    console.log(`  ✓ Copied ${demoHtmlFiles.length} demo HTML files as tutorial pages`);
} catch (err) {
    console.error('❌ Error copying demo HTML files:', err);
}

// Copy demo CSS and JSON files
console.log('📦 Copying demo assets...');
try {
    // Copy CSS to both paths the demo pages request.
    if (fs.existsSync(path.join(demosPath, 'css'))) {
        fs.copySync(
            path.join(demosPath, 'css'),
            path.join(docsPath, 'css'),
            { overwrite: true }
        );
        fs.copySync(
            path.join(demosPath, 'css'),
            path.join(docsPath, 'demos/css'),
            { overwrite: true }
        );
        console.log('  ✓ Copied demo CSS');
    }

    if (fs.existsSync(demosBuildPath)) {
        fs.ensureDirSync(path.join(docsPath, 'assets'));
        fs.readdirSync(demosBuildPath).forEach(file => {
            if (file.endsWith('.js')) {
                fs.copySync(
                    path.join(demosBuildPath, file),
                    path.join(docsPath, 'assets', file),
                    { overwrite: true }
                );
            }
        });
        console.log('  ✓ Copied demo JavaScript into docs/assets');
    }

    const bundledDir = path.join(__dirname, '../dist/bundled');
    const distCssDir = path.join(__dirname, '../dist/css');

    if (fs.existsSync(bundledDir)) {
        fs.copySync(bundledDir, path.join(docsPath, 'dist/bundled'), { overwrite: true });
        console.log('  ✓ Copied dist/bundled');
    } else {
        console.log('  ⚠️  dist/bundled is missing. Run "yarn build" before "yarn docs".');
    }

    if (fs.existsSync(distCssDir)) {
        fs.copySync(distCssDir, path.join(docsPath, 'dist/css'), { overwrite: true });
        console.log('  ✓ Copied dist/css');
    }

    const docImagesDir = path.join(__dirname, '../src/doc/images');

    if (fs.existsSync(docImagesDir)) {
        fs.copySync(docImagesDir, path.join(docsPath, 'src/doc/images'), { overwrite: true });
        console.log('  ✓ Copied doc images');
    }
} catch (err) {
    console.error('❌ Error copying demo assets:', err);
}

const htmlFiles = globSync(path.join(docsPath, '**/*.html'));
const basePath = docsBasePath();

if (basePath) {
    console.log(`🔗 Rewriting doc links for ${basePath}`);
    let rewrittenCount = 0;

    htmlFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const rewritten = applyDocsBasePath(content);

        if (rewritten !== content) {
            fs.writeFileSync(file, rewritten);
            rewrittenCount++;
        }
    });

    console.log(`  ✓ Updated links in ${rewrittenCount} HTML files`);
}

console.log('✅ Documentation sync complete!');

module.exports = async function() {
    return Promise.resolve();
};
