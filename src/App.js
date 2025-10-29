import {Console} from '@woowacourse/mission-utils';
import {inputPurchaseMoney} from "./utils/inputPurchaseMoney.js";
import {getLotto} from "./utils/getLotto.js";
import {inputPickedBonusNumber, inputPickedLottoNumber} from "./utils/inputWinningNumber.js";

class App {
  async run() {
    const purchaseAmount = await inputPurchaseMoney();

    Console.print(`\n${purchaseAmount}개를 구매했습니다.\n`);
    getLotto(purchaseAmount);

    const pickedLottoNumber = await inputPickedLottoNumber();
    const pickedBonusNumber = await inputPickedBonusNumber();

  }
}

export default App;
