/** Chemistry-style symbol: first letter uppercase, second lowercase (Tk, He). */
export function formatElementSymbol(symbol: string): string {
  if (symbol.length === 2) {
    return symbol.charAt(0).toUpperCase() + symbol.charAt(1).toLowerCase();
  }
  return symbol;
}
