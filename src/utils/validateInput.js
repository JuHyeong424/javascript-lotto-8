export function validatePurchaseAmount(input) {
  if (!Number.isInteger(input)) {
    throw new Error('[ERROR]구입금액은 정수여야 합니다. 다시 입력해주세요.');
  }
  if (input % 1000 !== 0) {
    throw new Error('[ERROR]구입금액은 1000단위여야 합니다. 다시 입력해주세요.');
  }
  if (input < 0 || input === 0) {
    throw new Error('[ERROR]구입금액은 양의 정수여야합니다. 다시 입력해주세요.');
  }
}
