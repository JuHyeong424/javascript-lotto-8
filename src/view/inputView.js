import {Console} from "@woowacourse/mission-utils";
import {validatePurchaseAmount} from "../utils/validateInput.js";
import Lotto from "../Lotto.js";

export async function inputPurchaseAmount() {
  let input;
  while (true) {
    try {
      input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      validatePurchaseAmount(Number(input));
      break;
    } catch (e) {
      Console.print(e.message);
    }
  }
  return input;
}

export async function inputWinningNumber() {
  let input;
  while(true) {
    try {
      input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      new Lotto(input.split(',').map(Number));
      break;
    } catch (e) {
      Console.print(e.message);
    }
  }
  return input;
}

export async function inputWinningBonusNumber() {
  return Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
}