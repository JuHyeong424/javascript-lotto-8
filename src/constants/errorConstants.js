export const LOTTO_NUMBER_ERROR = {
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATION: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.',
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  HAS_NAN: '[ERROR] 로또 번호는 숫자여야 합니다.',
  NOT_INTEGER: '[ERROR] 로또 번호는 정수여야 합니다.',
}

export const BONUS_ERROR = {
  IS_EMPTY: '[ERROR] 보너스 번호를 입력해야 합니다.',
  IS_NUMBER: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  OUT_OF_RANGE: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  IS_INTEGER: '[ERROR] 보너스 번호는 정수여야 합니다.',
  DUPLICATION: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.'
}

export const WIN_NUMBER_ERROR = {
  IS_EMPTY: '[ERROR] 당첨 번호를 입력해야 합니다.',
  INVALID_CHARACTERS: '[ERROR] 당첨 번호는 숫자와 쉼표(,)만을 사용하여 입력해야 합니다.',
  INVALID_COMMA_USAGE: '[ERROR] 쉼표(,)가 올바르게 사용되지 않았습니다. (예: 1,2,3)',
}

export const PURCHASE_ERROR = {
  IS_EMPTY: '[ERROR] 구입 금액을 입력해야 합니다.',
  IS_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다.',
  IS_INTEGER:'[ERROR] 구입 금액은 정수여야 합니다.',
  ONLY_POSITIVE_NUMBER: '[ERROR] 구입 금액은 양수여야 합니다.',
  INVALID__AMOUNT_UNIT: '[ERROR] 구입 금액을 1,000원 단위여야 합니다.'
}
