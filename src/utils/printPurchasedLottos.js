import {PRINT_PURCHASED_LOTTO} from "../constants/printConstants.js";
import {COMMA_DELIMITER} from "../constants/characterConstants.js";
import {Console} from "@woowacourse/mission-utils";

export function printPurchasedLottos(lottoArray) {
  lottoArray.forEach((lotto) => {
    const numbers = lotto.getNumbers().join(COMMA_DELIMITER.ONE);
    Console.print(PRINT_PURCHASED_LOTTO(numbers));
  })
}
