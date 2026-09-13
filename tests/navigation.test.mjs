import test from 'node:test';
import assert from 'node:assert/strict';
import { parseRoute, routeHref } from '../lib/routes.ts';

test('native links use static-host-compatible hash routes', () => {
  for (const route of [
    '/',
    '/opportunities',
    '/opportunities/lagos-coliving/readiness',
    '/opportunities/food-processing/token',
    '/incubation',
    '/expansion',
    '/ask',
  ]) {
    assert.equal(parseRoute(routeHref(route)).path, route);
  }
});
test('section navigation and skip links preserve the intended route', () => {
  assert.deepEqual(parseRoute(routeHref('/#how-it-works')), {
    path: '/',
    anchor: 'how-it-works',
  });
  assert.deepEqual(parseRoute(routeHref('/opportunities#main-content')), {
    path: '/opportunities',
    anchor: 'main-content',
  });
  assert.deepEqual(parseRoute('#how-it-works'), {
    path: '/',
    anchor: 'how-it-works',
  });
});
test('root, trailing slashes, and external hrefs are handled', () => {
  assert.deepEqual(parseRoute(''), { path: '/', anchor: '' });
  assert.equal(parseRoute('#/opportunities/').path, '/opportunities');
  assert.equal(routeHref('https://example.com'), 'https://example.com');
});
