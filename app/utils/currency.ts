export function getCurrencySymbol(currencyCode: string): string {
  try {
    return (0)
      .toLocaleString("en", {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\d/g, "")
      .trim();
  } catch {
    return currencyCode;
  }
}
