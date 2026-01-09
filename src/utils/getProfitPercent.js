export const LOTTO = { '5등': 5000, '4등': 50000, '3등': 1500000, '2등': 30000000, '1등': 2000000000 };

export function getProfitPercent(WINNING_COUNT, purchaseAmount) {
  const sum = WINNING_COUNT['5등'] * LOTTO['5등'] + WINNING_COUNT['4등'] * LOTTO['4등'] +WINNING_COUNT['3등'] * LOTTO['3등'] +WINNING_COUNT['2등'] * LOTTO['2등'] +WINNING_COUNT['1등'] * LOTTO['1등'];
  const profitPercent = sum / Number(purchaseAmount) * 100;
  return Math.round(profitPercent * 100) / 100;
}