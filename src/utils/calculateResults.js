import {LOTTO_COUNT_ZERO, LOTTO_RULES} from "../constants/lottoConstants.js";

const { FIRST, SECOND, THIRD, FOURTH, FIFTH } = LOTTO_RULES;

function determineRank(matchCount, hasBonus) {
  if (matchCount === FIRST.matchCount) return FIRST.rank;
  if (matchCount === SECOND.matchCount && hasBonus) return SECOND.rank;
  if (matchCount === THIRD.matchCount) return THIRD.rank;
  if (matchCount === FOURTH.matchCount) return FOURTH.rank;
  if (matchCount === FIFTH.matchCount) return FIFTH.rank;
  return null;
}

export function calculateResults(lottoArray, winningNumbers, pickedBonusNumber) {
  const rankCounts = { [FIRST.rank]: LOTTO_COUNT_ZERO, [SECOND.rank]: LOTTO_COUNT_ZERO, [THIRD.rank]: LOTTO_COUNT_ZERO, [FOURTH.rank]: LOTTO_COUNT_ZERO, [FIFTH.rank]: LOTTO_COUNT_ZERO };

  lottoArray.forEach((lotto) => {
    const matchCount = lotto.countMatch(winningNumbers);
    const hasBonus = lotto.hasBonus(pickedBonusNumber);

    const rank = determineRank(matchCount, hasBonus);
    if (rank) rankCounts[rank]++;
  });

  return rankCounts;
}
