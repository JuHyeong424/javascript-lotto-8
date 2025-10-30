import {Console} from "@woowacourse/mission-utils";
import {LOTTO_RULES} from "../constants/lottoConstants.js";
import {PRINT_PROFIT} from "../constants/printConstants.js";
import {PERCENT_HUNDRED, TO_FIXED_ONE} from "../constants/numberConstants.js";

const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = LOTTO_RULES;

export function printProfit(purchaseMoney, rankCounts) {
  const sum = FIFTH.prize * rankCounts[FIFTH.rank] + FOURTH.prize * rankCounts[FOURTH.rank] + THIRD.prize * rankCounts[THIRD.rank] + SECOND.prize * rankCounts[SECOND.rank] + FIRST.prize * rankCounts[FIRST.rank];
  const profit = sum * PERCENT_HUNDRED / purchaseMoney;
  const roundedProfit = profit.toFixed(TO_FIXED_ONE);
  Console.print(PRINT_PROFIT(roundedProfit));
}
