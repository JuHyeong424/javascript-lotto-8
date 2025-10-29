export function validateEmpty(inputString, errorMessage) {
  const trimInputString = inputString.trim()
  if (trimInputString.length === 0) throw new Error(errorMessage);
}
