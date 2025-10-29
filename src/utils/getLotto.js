import {Console, MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export function getLotto(purchaseAmount) {
  const lottoArray = [];
  for (let i = 0; i < purchaseAmount; i += 1) {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    const lotto = new Lotto(randomNumbers);
    lottoArray.push(lotto);
  }

  lottoArray.forEach((lotto) => {
    const numbers = lotto.getNumbers();
    Console.print(`[${numbers.join(', ')}]`);
  })

  return lottoArray;
}
