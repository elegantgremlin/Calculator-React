export function isMissingBracket(currentText) {
  return (currentText.match(/\(/g) || []).length > (currentText.match(/\)/g) || []).length
}