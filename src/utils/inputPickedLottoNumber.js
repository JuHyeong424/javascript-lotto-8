import {Console} from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

function validateInputLotto(inputStringLotto) {
  const regex = /^[0-9,]+$/;

  if (!regex.test(inputStringLotto)) throw new Error("[ERROR] 당첨 번호는 숫자와 쉼표(,)만을 사용하여 입력해야 합니다.");
  if (inputStringLotto.startsWith(',') || inputStringLotto.endsWith(',') || inputStringLotto.includes(',,')) {
    throw new Error("[ERROR] 쉼표(,)가 올바르게 사용되지 않았습니다. (예: 1,2,3)");
  }
}

export async function inputPickedLottoNumber() {
  while (true) {
    try {
      const inputStringLotto = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
      validateInputLotto(inputStringLotto);
      const winLottoNumber = inputStringLotto.split(',').map(Number);
      new Lotto(winLottoNumber);
      return winLottoNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
