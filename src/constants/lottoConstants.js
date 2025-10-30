export const LOTTO_RULES = {
  FIRST: {
    rank: '1st',
    matchCount: 6,
    requiresBonus: false,
    prize: 2000000000,
  },
  SECOND: {
    rank: '2nd',
    matchCount: 5,
    requiresBonus: true,
    prize: 30000000,
  },
  THIRD: {
    rank: '3rd',
    matchCount: 5,
    requiresBonus: false,
    prize: 1500000,
  },
  FOURTH: {
    rank: '4th',
    matchCount: 4,
    requiresBonus: false,
    prize: 50000,
  },
  FIFTH: {
    rank: '5th',
    matchCount: 3,
    requiresBonus: false,
    prize: 5000,
  },
};

export const LOTTO_COUNT_ZERO = 0;

export const LOTTO_RANGE = {
  START: 1,
  END: 45,
  TOTAL_LENGTH: 6,
}
