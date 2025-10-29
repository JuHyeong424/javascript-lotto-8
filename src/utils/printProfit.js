import {Console} from "@woowacourse/mission-utils";

export function printProfit(purchaseMoney, rankCounts) {
  const sum = 5000 * rankCounts["5th"] + 50000 * rankCounts["4th"] + 1500000 * rankCounts["3rd"] + 30000000*rankCounts["2nd"] + 2000000000 * rankCounts["1st"]
  const profit = sum * 100 / purchaseMoney;
  const roundedProfit = profit.toFixed(1);
  Console.print(`총 수익률은 ${roundedProfit}%입니다.`);
}
