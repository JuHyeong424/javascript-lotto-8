import {Console} from '@woowacourse/mission-utils';
import {inputPurchaseMoney} from "./utils/inputPurchaseMoney.js";
import {getLotto} from "./utils/getLotto.js";
import {inputPickedBonusNumber, inputPickedLottoNumber} from "./utils/inputWinningNumber.js";
import {calculateResults} from "./utils/calculateResults.js";

class App {
  async run() {
    const purchaseAmount = await inputPurchaseMoney();

    Console.print(`\n${purchaseAmount}개를 구매했습니다.\n`);
    const lottoArray = getLotto(purchaseAmount);

    const pickedLottoNumber = await inputPickedLottoNumber();
    const pickedBonusNumber = await inputPickedBonusNumber();

    Console.print('당첨 통계\n---');
    const rankCounts = calculateResults(lottoArray, pickedLottoNumber, pickedBonusNumber);
    Console.print(`3개 일치 (5,000원) - ${rankCounts["5th"]}개\n4개 일치 (50,000원) - ${rankCounts["4th"]}개\n5개 일치 (1,500,000원) - ${rankCounts["3rd"]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts["2nd"]}개\n6개 일치 (2,000,000,000원) - ${rankCounts["1st"]}개\n`)
  }
}

export default App;
