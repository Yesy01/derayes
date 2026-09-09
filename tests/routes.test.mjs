import { opportunities, views } from '../lib/opportunities.ts';
const routes = [
  '/',
  '/opportunities',
  ...opportunities.flatMap((o) =>
    views.map(
      (v) => '/opportunities/' + o.id + (v.id === 'overview' ? '' : '/' + v.id),
    ),
  ),
];
let failures = 0;
for (const route of routes) {
  const response = await fetch('http://localhost:3000' + route);
  const html = await response.text();
  const valid =
    response.status === 200 &&
    html.includes('PROOF OF CONCEPT') &&
    !html.includes('Internal Server Error');
  console.log(`${valid ? 'PASS' : 'FAIL'} ${response.status} ${route}`);
  if (!valid) failures++;
}
for (const route of [
  '/opportunities/unknown',
  '/opportunities/cedar-residences/unknown',
]) {
  const response = await fetch('http://localhost:3000' + route);
  const html = await response.text();
  const valid = response.status === 404 && html.includes('This record');
  console.log(`${valid ? 'PASS' : 'FAIL'} ${response.status} ${route}`);
  if (!valid) failures++;
}
for (const asset of ['residential', 'agriculture', 'manufacturing']) {
  const response = await fetch(`http://localhost:3000/images/${asset}.jpg`);
  const valid =
    response.ok && response.headers.get('content-type')?.startsWith('image/');
  console.log(
    `${valid ? 'PASS' : 'FAIL'} ${response.status} /images/${asset}.jpg`,
  );
  if (!valid) failures++;
}
process.exitCode = failures ? 1 : 0;
