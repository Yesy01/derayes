/** Hash routes work on static hosts without rewrite rules or server endpoints. */
export function parseRoute(hash: string) {
  const value = hash.replace(/^#/, '');
  if (!value.startsWith('/')) return { path: '/', anchor: value };
  const [rawPath, anchor = ''] = value.split('#', 2);
  return { path: rawPath.replace(/\/+$/, '') || '/', anchor };
}
export function routeHref(href: string) {
  return href.startsWith('/') ? `#${href}` : href;
}
