/**
 * Site prefix for generated docs.
 * Empty when serving locally at http://localhost:8001/.
 * GitHub Pages sets BASE_PATH, for example /cfpb-britecharts/.
 */
function docsBasePath() {
    const raw = (process.env.BASE_PATH || '').trim();

    if (!raw || raw === '/') {
        return '';
    }

    const withLeadingSlash = raw.startsWith('/') ? raw : `/${raw}`;

    return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
}

function withBase(assetPath) {
    const base = docsBasePath();
    const relative = String(assetPath).replace(/^\/+/, '');

    if (!base) {
        return `/${relative}`;
    }

    return `${base}${relative}`;
}

/**
 * Point localhost and site-root URLs at BASE_PATH.
 * Leaves URLs that are already prefixed, and leaves CDN URLs alone.
 */
function applyDocsBasePath(content) {
    const base = docsBasePath();

    if (!base) {
        return content;
    }

    let next = content.split('http://localhost:8001/').join(base);
    const roots = ['assets/', 'demos/', 'dist/', 'css/', 'britecharts/', 'scripts/'];

    roots.forEach((root) => {
        const pattern = new RegExp(`(['"])\\/${root}`, 'g');

        next = next.replace(pattern, (match, quote, offset, source) => {
            const baseWithoutTrailingSlash = base.slice(0, -1);
            const start = offset - baseWithoutTrailingSlash.length;

            if (start >= 0 && source.slice(start, offset) === baseWithoutTrailingSlash) {
                return match;
            }

            return `${quote}${base}${root}`;
        });
    });

    return next;
}

module.exports = {
    docsBasePath,
    withBase,
    applyDocsBasePath,
};
