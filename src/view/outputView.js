import {Console, Random} from "@woowacourse/mission-utils";
import {LOTTO} from "../utils/getProfitPercent.js";

export async function printPurchaseList(purchaseCount) {
  const purchaseResultArray = [];
  Console.print('');
  Console.print(`${purchaseCount}개를 구매했습니다.`);
  for (let i = 0; i < Number(purchaseCount); i++) {
    const random = Random.pickUniqueNumbersInRange(1, 45, 6);
    Console.print(`[${random.join(', ')}]`);
    purchaseResultArray.push(random);
  }
  return purchaseResultArray;
}

export async function printWinningStatics(WINNING_COUNT, profitPercent) {
  const formatNumber = (num) => Number(num).toLocaleString("ko-KR");
  Console.print('당첨 통계\n---');
  Console.print(`3개 일치 (${formatNumber(LOTTO['5등'])}원) - ${WINNING_COUNT['5등']}개`);
  Console.print(`4개 일치 (${formatNumber(LOTTO['4등'])}원) - ${WINNING_COUNT['4등']}개`);
  Console.print(`5개 일치 (${formatNumber(LOTTO['3등'])}원) - ${WINNING_COUNT['3등']}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (${formatNumber(LOTTO['2등'])}원) - ${WINNING_COUNT['2등']}개`);
  Console.print(`6개 일치 (${formatNumber(LOTTO['1등'])}원) - ${WINNING_COUNT['1등']}개`);
  Console.print(`총 수익률은 ${profitPercent}%입니다.`);
}