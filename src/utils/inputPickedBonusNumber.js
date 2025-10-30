import {Console} from "@woowacourse/mission-utils";
import {validateEmpty} from "./validators.js";
import {BONUS_ERROR} from "../constants/errorConstants.js";
import {INPUT_BONUS} from "../constants/inputConstants.js";

const { IS_EMPTY, IS_NUMBER, OUT_OF_RANGE, IS_INTEGER, DUPLICATION } = BONUS_ERROR;

function validateBonus(bonusNumber, pickedLottoNumber) {
  if (isNaN(bonusNumber)) throw new Error(IS_NUMBER);
  if (bonusNumber < 1 || bonusNumber > 45) throw new Error(OUT_OF_RANGE);
  if (!Number.isInteger(bonusNumber)) throw new Error(IS_INTEGER);
  if (pickedLottoNumber.includes(bonusNumber)) throw new Error(DUPLICATION);
}

export async function inputPickedBonusNumber(pickedLottoNumber) {
  while (true) {
    try {
      const bonusString = await Console.readLineAsync(INPUT_BONUS);
      validateEmpty(bonusString, IS_EMPTY);
      const bonusNumber = Number(bonusString);
      validateBonus(bonusNumber, pickedLottoNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
