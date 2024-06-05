import { env } from "process";

export function encodeAsStaticParams(x: string) {
  const xWithoutSpaces = env.NODE_ENV == "development" ? x.replaceAll(" ", "%20") : x; // "npm run dev" does not encode " " with "%20" (but "npm run build" does)
  const xLowerCase = xWithoutSpaces.toLowerCase();
  return xLowerCase;
}

export function decodeStaticParams(x: string) {
  function captitalize(x: string) {
    const capitalized = x.replace(/\b\w/g, (match) => match.toUpperCase());
    return capitalized;
  }

  const xWithSpaces = x.replaceAll("%20", " ");
  const xCapitalized = captitalize(xWithSpaces);
  return xCapitalized;
}
