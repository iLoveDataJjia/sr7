import data from "./codes.json";

/**
 * Get codes.
 */
export function getCodes() {
  return data as Code[];
}

/**
 * Code.
 */
export interface Code {
  codeUID: string;
  items: {
    nameUID: string;
    quantity: number;
  }[];
}
