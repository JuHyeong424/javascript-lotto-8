import { Console } from "@woowacourse/mission-utils";
import { INPUT_PURCHASE, INPUT_WIN_LOTTO, INPUT_BONUS } from '../constants/inputConstants.js';

export const InputView = {
  async readPurchaseMoney() {
    return await Console.readLineAsync(INPUT_PURCHASE);
  },
  async readWinningLotto() {
    return await Console.readLineAsync(INPUT_WIN_LOTTO);
  },
  async readBonusNumber() {
    return await Console.readLineAsync(INPUT_BONUS);
  },
};
