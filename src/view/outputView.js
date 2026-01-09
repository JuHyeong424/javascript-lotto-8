import {Console, Random} from "@woowacourse/mission-utils";
import {LOTTO} from "../utils/getProfitPercent.js";

export async function printPurchaseList(purchaseCount) {
  const purchaseResultArray = [];
  Console.print('');
  Console.print(`${purchaseCount}개를 구매했습니다.`);
  for (let i = 0; i < Number(purchaseCount); i++) {
    const random = Random.pickUniqueNumbersInRange(1, 45, 6);
    Console.print(random);
    purchaseResultArray.push(random);
  }
  return purchaseResultArray;
}

export async function printWinningStatics(WINNING_COUNT, profitPercent) {
  Console.print('당첨 통계\n---');
  Console.print(`3개 일치 (${LOTTO['5등']}) - ${WINNING_COUNT['5등']}개`);
  Console.print(`4개 일치 (${LOTTO['4등']}) - ${WINNING_COUNT['4등']}개`);
  Console.print(`5개 일치 (${LOTTO['3등']}) - ${WINNING_COUNT['3등']}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (${LOTTO['2등']}) - ${WINNING_COUNT['2등']}개`);
  Console.print(`6개 일치 (${LOTTO['1등']}) - ${WINNING_COUNT['1등']}개`);
  Console.print(`총 수익률은 ${profitPercent}%입니다.`);
}