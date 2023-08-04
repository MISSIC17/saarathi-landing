export default function extractRoute(pathname: string) {
  if (pathname === "/") return "home";
  let s = pathname
    .slice(1, pathname.length)
    .split("")
    .findIndex((letter) => letter === "/");
  if (s === -1) {
    return pathname.slice(1, pathname.length);
  }
  return pathname.slice(1, s+1);
}
