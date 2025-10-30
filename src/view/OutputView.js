import {Console} from "@woowacourse/mission-utils";
import {
  PRINT_PROFIT,
  PRINT_PURCHASE_AMOUNT,
  PRINT_PURCHASED_LOTTO,
  PRINT_RESULTS
} from "../constants/printConstants.js";
import {COMMA_DELIMITER} from "../constants/characterConstants.js";

export const OutputView = {
  printPurchaseAmount(purchaseAmount) {
    Console.print(PRINT_PURCHASE_AMOUNT(purchaseAmount));
  },
  printPurchasedLottos(lottoArray) {
    lottoArray.forEach((lotto) => {
      const numbers = lotto.getNumbers().join(COMMA_DELIMITER.ONE);
      Console.print(PRINT_PURCHASED_LOTTO(numbers));
    })
  },
  printResults(rankCounts) {
    const { HEADER, FIFTH, FOURTH, THIRD, SECOND, FIRST } = PRINT_RESULTS(rankCounts);

    Console.print(HEADER);
    Console.print(FIFTH);
    Console.print(FOURTH);
    Console.print(THIRD);
    Console.print(SECOND);
    Console.print(FIRST);
  },
  printProfit(roundedProfit) {
    Console.print(PRINT_PROFIT(roundedProfit));
  },
  printError(error) {
    Console.print(error.message);
  }
}
