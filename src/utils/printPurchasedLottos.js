import {Console} from "@woowacourse/mission-utils";

export function printPurchasedLottos(lottoArray) {
  lottoArray.forEach((lotto) => {
    const numbers = lotto.getNumbers();
    Console.print(`[${numbers.join(', ')}]`);
  })
}
