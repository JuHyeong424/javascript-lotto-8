import {LOTTO_RULES} from "../constants/lottoConstants.js";
import {PERCENT_HUNDRED, TO_FIXED_ONE} from "../constants/numberConstants.js";

const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = LOTTO_RULES;

export function getProfit(purchaseMoney, rankCounts) {
  const sum = FIFTH.prize * rankCounts[FIFTH.rank] + FOURTH.prize * rankCounts[FOURTH.rank] + THIRD.prize * rankCounts[THIRD.rank] + SECOND.prize * rankCounts[SECOND.rank] + FIRST.prize * rankCounts[FIRST.rank];
  const profit = sum * PERCENT_HUNDRED / purchaseMoney;
  return profit.toFixed(TO_FIXED_ONE);
}
