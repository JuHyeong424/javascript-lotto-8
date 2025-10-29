import {Console} from "@woowacourse/mission-utils";

export function printResults(rankCounts) {
  Console.print('\n당첨 통계\n---');
  Console.print(`3개 일치 (5,000원) - ${rankCounts['5th']}개`);
  Console.print(`4개 일치 (50,000원) - ${rankCounts['4th']}개`);
  Console.print(`5개 일치 (1,500,000원) - ${rankCounts['3rd']}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts['2nd']}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${rankCounts['1st']}개`);
}
