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

/*
[ 14, 12, 23, 19, 18, 25 ]
[ 4, 6, 11, 3, 8, 10 ]
[ 1, 32, 36, 30, 12, 29 ]
[ 4, 24, 13, 34, 25, 44 ]
[ 6, 35, 28, 39, 40, 43 ]
[ 7, 36, 43, 15, 9, 44 ]
[ 3, 32, 28, 13, 45, 5 ]
[ 2, 22, 37, 32, 5, 19 ]

1,2,3,4,5,6

7
 */