import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const html = readFileSync('dist/index.html', 'utf8');
const base = '/derayes/';

test('GitHub Pages entry references existing assets under the repository prefix', () => {
  const refs = [...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(
    (match) => match[1],
  );
  assert.ok(refs.some((url) => url.endsWith('.js')));
  assert.ok(refs.some((url) => url.endsWith('.css')));
  for (const url of refs) {
    assert.ok(url.startsWith(base), `Unexpected asset URL ${url}`);
    assert.ok(
      existsSync(resolve('dist', url.slice(base.length))),
      `Missing asset ${url}`,
    );
  }
  assert.ok(!html.includes('_next'));
  assert.ok(!html.includes('chatgpt.site'));
});
test('all illustrative photo assets are included', () => {
  for (const name of ['residential', 'agriculture', 'manufacturing']) {
    assert.ok(readFileSync(`dist/images/${name}.jpg`).length > 1000);
  }
});
