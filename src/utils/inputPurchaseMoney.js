import {validateEmpty} from "./validators.js";
import {PURCHASE_ERROR} from "../constants/errorConstants.js";
import {LOTTO_PRICE, ZERO} from "../constants/numberConstants.js";
import {InputView} from "../view/InputView.js";
import {OutputView} from "../view/OutputView.js";

const { IS_EMPTY, IS_NUMBER, IS_INTEGER, ONLY_POSITIVE_NUMBER, INVALID__AMOUNT_UNIT } = PURCHASE_ERROR;

function validateMoney(money) {
  if (isNaN(money)) throw new Error(IS_NUMBER);
  if (!Number.isInteger(money)) throw new Error(IS_INTEGER);
  if (money <= ZERO) throw new Error(ONLY_POSITIVE_NUMBER);
  if (money % LOTTO_PRICE !== ZERO) throw new Error(INVALID__AMOUNT_UNIT);
}

export async function inputPurchaseMoney() {
  while (true) {
    try {
      const moneyString = await InputView.readPurchaseMoney();
      validateEmpty(moneyString, IS_EMPTY);
      const money = Number(moneyString);
      validateMoney(money);
      return money;
    } catch (error) {
      OutputView.printError(error);
    }
  }
}
