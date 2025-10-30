import Lotto from "../Lotto.js";
import {WIN_NUMBER_ERROR} from "../constants/errorConstants.js";
import {LOTTO_NUMBER_PATTERN, COMMA_DELIMITER} from "../constants/characterConstants.js";
import {InputView} from "../view/InputView.js";
import LottoError from "../error/LottoError.js";
import {OutputView} from "../view/OutputView.js";

const {IS_EMPTY, INVALID_CHARACTERS, INVALID_COMMA_USAGE} = WIN_NUMBER_ERROR;
const {ONE, TWO} = COMMA_DELIMITER;

function validateInputLotto(inputStringLotto) {
  const trimStringLotto = inputStringLotto.trim();
  const regex = LOTTO_NUMBER_PATTERN;

  if (trimStringLotto.length === 0) throw new LottoError(IS_EMPTY);
  if (!regex.test(inputStringLotto)) throw new LottoError(INVALID_CHARACTERS);
  if (inputStringLotto.startsWith(ONE) || inputStringLotto.endsWith(ONE) || inputStringLotto.includes(TWO)) {
    throw new LottoError(INVALID_COMMA_USAGE);
  }
}

export async function inputPickedLottoNumber() {
  while (true) {
    try {
      const inputStringLotto = await InputView.readWinningLotto();
      validateInputLotto(inputStringLotto);
      const winLottoNumber = inputStringLotto.split(COMMA_DELIMITER.ONE).map(Number);

      new Lotto(winLottoNumber);

      return winLottoNumber;
    } catch (error) {
      OutputView.printError(error);
    }
  }
}
