import {ZERO} from "../constants/numberConstants.js";

export function validateEmpty(inputString, errorMessage) {
  const trimInputString = inputString.trim()
  if (trimInputString.length === ZERO) throw new Error(errorMessage);
}
