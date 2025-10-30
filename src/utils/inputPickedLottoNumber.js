import Lotto from "../Lotto.js";
import {WIN_NUMBER_ERROR} from "../constants/errorConstants.js";
import {
  LOTTO_NUMBER_PATTERN,
  COMMA_DELIMITER,
  REGEX_ALL_WHITESPACE, EMPTY_STRING
} from "../constants/characterConstants.js";
import {InputView} from "../view/InputView.js";
import LottoError from "../error/LottoError.js";
import {OutputView} from "../view/OutputView.js";

const {IS_EMPTY, INVALID_CHARACTERS, INVALID_COMMA_USAGE} = WIN_NUMBER_ERROR;
const {ONE, TWO} = COMMA_DELIMITER;

function validateInputLotto(cleanedInputString) {
  const regex = LOTTO_NUMBER_PATTERN;

  if (cleanedInputString.length === 0) throw new LottoError(IS_EMPTY);
  if (!regex.test(cleanedInputString)) throw new LottoError(INVALID_CHARACTERS);
  if (cleanedInputString.startsWith(ONE) || cleanedInputString.endsWith(ONE) || cleanedInputString.includes(TWO)) {
    throw new LottoError(INVALID_COMMA_USAGE);
  }
}

export async function inputPickedLottoNumber() {
  while (true) {
    try {
      const inputStringLotto = await InputView.readWinningLotto();
      const cleanedInput = inputStringLotto.replace(REGEX_ALL_WHITESPACE, EMPTY_STRING);
      validateInputLotto(cleanedInput);
      const winLottoNumber = cleanedInput.split(COMMA_DELIMITER.ONE).map(Number);

      new Lotto(winLottoNumber);

      return winLottoNumber;
    } catch (error) {
      OutputView.printError(error);
    }
  }
}
