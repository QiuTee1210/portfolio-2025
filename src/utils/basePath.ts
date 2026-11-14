// The site can be served from a sub-path (e.g. GitHub Pages: /portfolio-2025/).
// App routes ("/", "/project/x") are always handled without that prefix;
// these helpers convert between app routes and real browser URLs.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

export const withBase = (path: string) => {
  if (!path.startsWith("/")) return path;
  return `${BASE}${path}` || "/";
};

export const stripBase = (pathname: string) => {
  let path = pathname;
  if (BASE && (path === BASE || path.startsWith(`${BASE}/`))) {
    path = path.slice(BASE.length);
  }
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path || "/";
};
