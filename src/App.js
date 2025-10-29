import {Console, MissionUtils} from '@woowacourse/mission-utils';
import {inputPurchaseMoney} from "./utils/inputPurchaseMoney.js";
import Lotto from "./Lotto.js";
import {getLotto} from "./utils/getLotto.js";

class App {
  async run() {
    const purchaseAmount = await inputPurchaseMoney();
    Console.print(`\n${purchaseAmount}개를 구매했습니다.`);
    getLotto(purchaseAmount);
  }
}

export default App;
