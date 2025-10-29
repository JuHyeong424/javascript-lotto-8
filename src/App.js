import {getLotto} from "./utils/getLotto.js";
import {calculateResults} from "./utils/calculateResults.js";
import {printProfit} from "./utils/printProfit.js";
import {inputPurchaseMoney} from "./utils/inputPurchaseMoney.js";
import {getPurchaseAmount} from "./utils/getPurchaseAmount.js";
import {inputPickedLottoNumber} from "./utils/inputPickedLottoNumber.js";
import {inputPickedBonusNumber} from "./utils/inputPickedBonusNumber.js";
import {printResults} from "./utils/printResults.js";
import {Console} from "@woowacourse/mission-utils";
import {printPurchasedLottos} from "./utils/printPurchasedLottos.js";

class App {
  async run() {
    const purchaseMoney = await inputPurchaseMoney();
    const purchaseAmount = getPurchaseAmount(purchaseMoney);
    Console.print(`\n${purchaseAmount}개를 구매했습니다.`);

    const lottoArray = getLotto(purchaseAmount);
    printPurchasedLottos(lottoArray);

    const pickedLottoNumber = await inputPickedLottoNumber();
    const pickedBonusNumber = await inputPickedBonusNumber(pickedLottoNumber);

    const rankCounts = calculateResults(lottoArray, pickedLottoNumber, pickedBonusNumber);
    printResults(rankCounts);
    printProfit(purchaseMoney, rankCounts);
  }
}

export default App;
