import {getLotto} from "./utils/getLotto.js";
import {calculateResults} from "./utils/calculateResults.js";
import {getProfit} from "./utils/getProfit.js";
import {inputPurchaseMoney} from "./utils/inputPurchaseMoney.js";
import {getPurchaseAmount} from "./utils/getPurchaseAmount.js";
import {inputPickedLottoNumber} from "./utils/inputPickedLottoNumber.js";
import {inputPickedBonusNumber} from "./utils/inputPickedBonusNumber.js";
import {OutputView} from "./view/OutputView.js";

class App {
  async run() {
    try {
      const purchaseMoney = await inputPurchaseMoney();
      const purchaseAmount = getPurchaseAmount(purchaseMoney);
      OutputView.printPurchaseAmount(purchaseAmount);

      const lottoArray = getLotto(purchaseAmount);
      OutputView.printPurchasedLottos(lottoArray);

      const winningNumbers = await inputPickedLottoNumber();
      const pickedBonusNumber = await inputPickedBonusNumber(winningNumbers);

      const rankCounts = calculateResults(lottoArray, winningNumbers, pickedBonusNumber);
      OutputView.printResults(rankCounts);
      const profit = getProfit(purchaseMoney, rankCounts);
      OutputView.printProfit(profit);
    } catch (error) {
      OutputView.printError(error);
    }
  }
}

export default App;
