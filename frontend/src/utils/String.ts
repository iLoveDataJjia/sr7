/**
 * Uppercase first letter of each words.
 */
export function srCapitalize(x: string) {
  const capitalized = x.replace(/\b\w/g, (match) => match.toUpperCase());
  return capitalized;
}

/**
 * Encode as usable URI.
 */
export function srEncodeURL(x: string, doParenthesis: boolean = false) {
  const out = x.replaceAll(" ", "%20");
  if (doParenthesis) return out.replaceAll("(", "%28").replaceAll(")", "%29");
  return out;
}

/**
 * Decode from URI.
 */
export function srDecodeURL(x: string) {
  return x.replaceAll("%20", " ").replaceAll("%28", "(").replaceAll("%29", ")");
}
