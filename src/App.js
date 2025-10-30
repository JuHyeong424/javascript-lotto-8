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
import {PRINT_PURCHASE_AMOUNT} from "./constants/printConstants.js";

class App {
  async run() {
    const purchaseMoney = await inputPurchaseMoney();
    const purchaseAmount = getPurchaseAmount(purchaseMoney);
    Console.print(PRINT_PURCHASE_AMOUNT(purchaseAmount));

    const lottoArray = getLotto(purchaseAmount);
    printPurchasedLottos(lottoArray);

    const winningNumbers = await inputPickedLottoNumber();
    const pickedBonusNumber = await inputPickedBonusNumber(winningNumbers);

    const rankCounts = calculateResults(lottoArray, winningNumbers, pickedBonusNumber);
    printResults(rankCounts);
    printProfit(purchaseMoney, rankCounts);
  }
}

export default App;
