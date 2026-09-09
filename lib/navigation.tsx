import { useSyncExternalStore, type ComponentProps } from 'react';
import { parseRoute, routeHref } from './routes';

function subscribe(listener: () => void) {
  window.addEventListener('hashchange', listener);
  return () => window.removeEventListener('hashchange', listener);
}
export function useRoute() {
  const hash = useSyncExternalStore(
    subscribe,
    () => window.location.hash,
    () => '',
  );
  return parseRoute(hash);
}
export function usePathname() {
  return useRoute().path;
}

export default function Link({
  href = '/',
  children,
  ...props
}: ComponentProps<'a'>) {
  return (
    <a {...props} href={routeHref(href)}>
      {children}
    </a>
  );
}
