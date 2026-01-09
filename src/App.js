import {inputPurchaseAmount, inputWinningBonusNumber, inputWinningNumber} from "./view/inputView.js";
import {purchaseAmountCount} from "./utils/purchaseAmountCount.js";
import {printPurchaseList} from "./view/outputView.js";

class App {
  async run() {
    const purchaseAmount = await inputPurchaseAmount();
    const purchaseCount = purchaseAmountCount(purchaseAmount);
    const purchaseResultArray = await printPurchaseList(purchaseCount);
    const winningNumber = await inputWinningNumber();
    const winningBonusNumber = await inputWinningBonusNumber();
  }
}

export default App;
