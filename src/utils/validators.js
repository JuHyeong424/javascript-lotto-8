import {ZERO} from "../constants/numberConstants.js";
import LottoError from "../error/LottoError.js";

export function validateEmpty(inputString, errorMessage) {
  const trimInputString = inputString.trim()
  if (trimInputString.length === ZERO) throw new LottoError(errorMessage);
}
