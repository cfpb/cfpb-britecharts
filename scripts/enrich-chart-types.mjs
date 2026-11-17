import fs from 'fs';
import path from 'path';

const root = path.resolve(import.meta.dirname, '..');

const charts = [
    ['line', 'LineChart'],
    ['stacked-area', 'StackedAreaChart'],
    ['row', 'RowChart'],
    ['tooltip', 'TooltipChart'],
    ['mini-tooltip', 'MiniTooltipChart'],
];

function toTs(type, selfName) {
    if (!type) {
        return 'any';
    }

    const parts = type
        .replace(/[(){}]/g, '')
        .split('|')
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
            const lower = part.toLowerCase();

            if (lower === 'number') return 'number';
            if (lower === 'string') return 'string';
            if (lower === 'boolean') return 'boolean';
            if (lower === 'object' || lower === 'obj') return 'Record<string, any>';
            if (lower === 'module' || lower === 'function' || /chart/.test(lower)) return selfName;
            if (lower === 'array' || lower.endsWith('[]')) return 'any[]';

            return 'any';
        });

    return [...new Set(parts)].join(' | ') || 'any';
}

function precedingJsdoc(source, index) {
    const before = source.slice(0, index);
    const start = before.lastIndexOf('/**');

    if (start === -1) {
        return '';
    }

    const end = before.indexOf('*/', start);

    if (end === -1 || end < before.length - 80 && before.slice(end).includes('exports.')) {
        return '';
    }

    return before.slice(start, end + 2);
}

function documentedParams(jsdoc, signature, selfName) {
    const fromDocs = [...jsdoc.matchAll(/@param\s+\{([^}]+)\}\s+(\[)?([\w.]+)/g)]
        .map((match) => ({
            type: toTs(match[1], selfName),
            optional: Boolean(match[2]),
            name: (match[3].replace(/^_/, '') || 'value').split('.').pop(),
        }));

    if (fromDocs.length) {
        return fromDocs.map((param) => ({
            ...param,
            name: param.name === 'x' || param.name === 'markup' ? 'value' : param.name,
        }));
    }

    return signature
        .split(',')
        .map((name) => name.replace(/=.*$/, '').trim())
        .filter(Boolean)
        .map((name) => ({
            name: name.replace(/^_/, '') || 'value',
            type: 'any',
            optional: false,
        }));
}

function formatParams(params) {
    return params
        .map((param) => `${param.name}${param.optional ? '?' : ''}: ${param.type}`)
        .join(', ');
}

function memberLines(name, jsdoc, signature, selfName) {
    if (name === 'on') {
        return [
            '    on(eventName: string): any;',
            `    on(eventName: string, handler: (...args: any[]) => void): ${selfName};`,
        ];
    }

    const params = documentedParams(jsdoc, signature, selfName);
    const returnMatch = jsdoc.match(/@return\s+\{([^}]+)\}/);
    const returnType = toTs(returnMatch && returnMatch[1], selfName);
    const returnParts = returnType.split(' | ').map((part) => part.trim()).filter(Boolean);
    const getterType = returnParts.filter((part) => part !== selfName).join(' | ') || 'any';

    if (params.length === 1) {
        return [
            `    ${name}(): ${getterType};`,
            `    ${name}(value: ${params[0].type}): ${selfName};`,
        ];
    }

    return [`    ${name}(${formatParams(params)}): ${returnType};`];
}

function buildInterface(source, selfName) {
    const members = [];
    const pattern = /exports\.(\w+)\s*=\s*(?:function\s*\(([^)]*)\)|([A-Za-z_$][\w$]*))/g;
    let match;

    while ((match = pattern.exec(source))) {
        const name = match[1];

        if (name.startsWith('__')) {
            continue;
        }

        const isFunction = match[2] != null;

        if (!isFunction) {
            members.push(`    ${name}: Record<string, any>;`);
            continue;
        }

        const jsdoc = precedingJsdoc(source, match.index);

        members.push(...memberLines(name, jsdoc, match[2], selfName));
    }

    return `export interface ${selfName} {\n    (selection: any): void;\n${members.join('\n')}\n}\n\nexport default function chart(): ${selfName};\n`;
}

charts.forEach(([file, selfName]) => {
    const source = fs.readFileSync(path.join(root, 'src/charts', `${file}.js`), 'utf8');
    const declarationPath = path.join(root, 'dist/types/charts', `${file}.d.ts`);
    const declaration = fs.readFileSync(declarationPath, 'utf8');
    const replacement = buildInterface(source, selfName);
    const next = declaration.replace(/export default function module\(\)[\s\S]*?;\n/, replacement);

    if (next === declaration) {
        throw new Error(`Could not enrich ${declarationPath}`);
    }

    fs.writeFileSync(declarationPath, next);
    console.log(`enriched ${file}.d.ts`);
});
