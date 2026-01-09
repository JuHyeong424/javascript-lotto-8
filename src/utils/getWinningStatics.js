const WINNING_COUNT = { '5등': 0, '4등': 0, '3등': 0, '2등': 0, '1등': 0 }

export function getWinningStatics(purchaseResultArray, winningNumber, winningBonusNumber) {
  const winningNumberArray = winningNumber.split(',').map(Number);
  for (let i = 0; i < purchaseResultArray.length; i++) {
    let count = 0;
    let bonus = false;
    for (let j = 0; j < winningNumberArray.length; j++) {
      purchaseResultArray[i].forEach(value => {
        if (value === winningNumberArray[j]) {
          count += 1;
        }
        if (value === Number(winningBonusNumber)) {
          bonus = true;
        }
      })
    }
    switch (count) {
      case 3:
        WINNING_COUNT['5등'] += 1;
        break;
      case 4:
        WINNING_COUNT['4등'] += 1;
        break;
      case 5:
        if (bonus) {
          WINNING_COUNT['2등'] += 1;
          break;
        }
        WINNING_COUNT['3등'] += 1;
        break;
      case 6:
        WINNING_COUNT['1등'] += 1;
        break;
    }
  }
  return WINNING_COUNT;
}
