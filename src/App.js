import {inputPurchaseAmount, inputWinningBonusNumber, inputWinningNumber} from "./view/inputView.js";
import {purchaseAmountCount} from "./utils/purchaseAmountCount.js";
import {printPurchaseList} from "./view/outputView.js";
import {getWinningStatics} from "./utils/getWinningStatics.js";
import {getProfitPercent} from "./utils/getProfitPercent.js";

class App {
  async run() {
    const purchaseAmount = await inputPurchaseAmount();
    const purchaseCount = purchaseAmountCount(purchaseAmount);
    const purchaseResultArray = await printPurchaseList(purchaseCount);
    const winningNumber = await inputWinningNumber();
    const winningBonusNumber = await inputWinningBonusNumber();
    const WINNING_COUNT = getWinningStatics(purchaseResultArray, winningNumber, winningBonusNumber);
    const profitPercent = getProfitPercent(WINNING_COUNT, purchaseAmount);
  }
}

export default App;
