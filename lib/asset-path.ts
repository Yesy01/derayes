/** Vite injects the configured deployment base into all public asset URLs. */
export function assetPath(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
