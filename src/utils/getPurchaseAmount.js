import {LOTTO_PRICE} from "../constants/numberConstants.js";

export function getPurchaseAmount(purchaseMoney) {
  return purchaseMoney / LOTTO_PRICE;
}
