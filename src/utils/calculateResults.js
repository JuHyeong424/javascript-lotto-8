function determineRank(matchCount, hasBonus) {
  if (matchCount === 6) return '1st';
  if (matchCount === 5 && hasBonus) return '2nd';
  if (matchCount === 5) return '3rd';
  if (matchCount === 4) return '4th';
  if (matchCount === 3) return '5th';
  return null;
}

export function calculateResults(lottoArray, pickedLottoNumber, pickedBonusNumber) {
  const rankCounts = { '1st': 0, '2nd': 0, '3rd': 0, '4th': 0, '5th': 0 };

  lottoArray.forEach((lotto) => {
    const myNumbers = lotto.getNumbers();

    const matchCount = myNumbers.filter(number => pickedLottoNumber.includes(number)).length;
    const hasBonus = myNumbers.includes(pickedBonusNumber);

    const rank = determineRank(matchCount, hasBonus);

    if (rank) rankCounts[rank]++;
  });

  return rankCounts;
}
