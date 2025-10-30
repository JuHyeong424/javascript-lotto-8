import {Console} from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import {INPUT_WIN_LOTTO} from "../constants/inputConstants.js";
import {WIN_NUMBER_ERROR} from "../constants/errorConstants.js";
import {LOTTO_NUMBER_PATTERN, COMMA_DELIMITER} from "../constants/characterConstants.js";

const { IS_EMPTY, INVALID_CHARACTERS, INVALID_COMMA_USAGE } = WIN_NUMBER_ERROR;
const { ONE, TWO } = COMMA_DELIMITER;

function validateInputLotto(inputStringLotto) {
  const trimStringLotto = inputStringLotto.trim();
  const regex = LOTTO_NUMBER_PATTERN;

  if (trimStringLotto.length === 0) throw new Error(IS_EMPTY);
  if (!regex.test(inputStringLotto)) throw new Error(INVALID_CHARACTERS);
  if (inputStringLotto.startsWith(ONE) || inputStringLotto.endsWith(ONE) || inputStringLotto.includes(TWO)) {
    throw new Error(INVALID_COMMA_USAGE);
  }
}

export async function inputPickedLottoNumber() {
  while (true) {
    try {
      const inputStringLotto = await Console.readLineAsync(INPUT_WIN_LOTTO);
      validateInputLotto(inputStringLotto);
      const winLottoNumber = inputStringLotto.split(ONE).map(Number);
      new Lotto(winLottoNumber);
      return winLottoNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
