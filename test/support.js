import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fixtureHtml = fs.readFileSync(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'fixtures/testContainer.html'),
    'utf8',
);

export function loadTestContainer() {
    document.body.innerHTML = fixtureHtml;
}

export function clearTestContainer() {
    document.body.innerHTML = '';
}

export function createSpy() {
    const fn = rs.fn();

    fn.calls = {
        count() {
            return fn.mock.calls.length;
        },
        allArgs() {
            return fn.mock.calls;
        },
    };

    return fn;
}
