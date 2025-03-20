export function truncate(text, symbolsLimit = 90) {
  if (!text) {
    return text;
  }
  return text.length <= symbolsLimit
    ? text
    : `${text.slice(0, symbolsLimit - 3)}...`;
}
