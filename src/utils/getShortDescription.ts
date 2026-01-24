export function getShortDescription(text: string, maxLength: number = 45): string {
  if (!text) return '';

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
}