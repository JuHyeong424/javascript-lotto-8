export const PRINT_PROFIT = (roundedProfit) => `총 수익률은 ${roundedProfit}%입니다.`;

export const PRINT_PURCHASED_LOTTO = (numbers) => `[${numbers}]`;

export const PRINT_RESULTS = (rankCounts) => ({
  HEADER: '\n당첨 통계\n---',
  FIRST: `6개 일치 (2,000,000,000원) - ${rankCounts['1st']}개`,
  SECOND: `5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCounts['2nd']}개`,
  THIRD: `5개 일치 (1,500,000원) - ${rankCounts['3rd']}개`,
  FOURTH: `4개 일치 (50,000원) - ${rankCounts['4th']}개`,
  FIFTH: `3개 일치 (5,000원) - ${rankCounts['5th']}개`,
})

export const PRINT_PURCHASE_AMOUNT = (purchaseAmount) => `\n${purchaseAmount}개를 구매했습니다.`;
