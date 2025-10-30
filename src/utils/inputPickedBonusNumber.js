import {validateEmpty} from "./validators.js";
import {BONUS_ERROR} from "../constants/errorConstants.js";
import {InputView} from "../view/InputView.js";
import LottoError from "../error/LottoError.js";
import {OutputView} from "../view/OutputView.js";

const {IS_EMPTY, IS_NUMBER, OUT_OF_RANGE, IS_INTEGER, DUPLICATION} = BONUS_ERROR;

function validateBonus(bonusNumber, pickedLottoNumber) {
  if (isNaN(bonusNumber)) throw new LottoError(IS_NUMBER);
  if (bonusNumber < 1 || bonusNumber > 45) throw new LottoError(OUT_OF_RANGE);
  if (!Number.isInteger(bonusNumber)) throw new LottoError(IS_INTEGER);
  if (pickedLottoNumber.includes(bonusNumber)) throw new LottoError(DUPLICATION);
}

export async function inputPickedBonusNumber(pickedLottoNumber) {
  while (true) {
    try {
      const bonusString = await InputView.readBonusNumber();
      validateEmpty(bonusString, IS_EMPTY);
      const bonusNumber = Number(bonusString);
      validateBonus(bonusNumber, pickedLottoNumber);
      return bonusNumber;
    } catch (error) {
      OutputView.printError(error);
    }
  }
}
