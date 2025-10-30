import {MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import {LOTTO_RANGE} from "../constants/lottoConstants.js";

const { START, END, TOTAL_LENGTH } = LOTTO_RANGE;

export function getLotto(purchaseAmount) {
  const lottoArray = [];

  for (let i = 0; i < purchaseAmount; i += 1) {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(START, END, TOTAL_LENGTH);
    const lotto = new Lotto(randomNumbers);
    lottoArray.push(lotto);
  }

  return lottoArray;
}
