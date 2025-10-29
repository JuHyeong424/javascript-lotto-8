import {Console} from '@woowacourse/mission-utils';
import {inputPurchaseMoney} from "./utils/inputPurchaseMoney.js";

class App {
  async run() {
    const purchaseAmount = await inputPurchaseMoney();
  }
}

export default App;
