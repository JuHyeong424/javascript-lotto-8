export function calculateResults(lottoArray, pickedLottoNumber, pickedBonusNumber) {
  const rankCounts = {
    '1st': 0,
    '2nd': 0,
    '3rd': 0,
    '4th': 0,
    '5th': 0,
  };

  lottoArray.forEach((lotto) => {
    const myNumbers = lotto.getNumbers();

    const matchCount = myNumbers.filter(number => pickedLottoNumber.includes(number)).length;
    const hasBonus = myNumbers.includes(pickedBonusNumber);

    if (matchCount === 6) {
      rankCounts['1st']++;
    } else if (matchCount === 5 && hasBonus) {
      rankCounts['2nd']++;
    } else if (matchCount === 5) {
      rankCounts['3rd']++;
    } else if (matchCount === 4) {
      rankCounts['4th']++;
    } else if (matchCount === 3) {
      rankCounts['5th']++;
    }
  });

  return rankCounts;
}
