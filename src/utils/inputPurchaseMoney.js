import {Console} from "@woowacourse/mission-utils";

function validateEmpty(moneyString) {
  const trimMoneyString = moneyString.trim()
  if (trimMoneyString.length === 0) throw new Error('[ERROR] 구입 금액을 입력해야 합니다.');
}

function validateMoney(money) {
  if (isNaN(money)) throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
  if (!Number.isInteger(money)) throw new Error('[ERROR] 구입 금액은 정수여야 합니다.');
  if (money <= 0) throw new Error('[ERROR] 구입 금액은 양수여야 합니다.');
  if (money % 1000 !== 0) throw new Error('[ERROR] 구입 금액을 1,000원 단위여야 합니다.');
}

export async function inputPurchaseMoney() {
  while (true) {
    try {
      const moneyString = await Console.readLineAsync('로또 구입 금액을 입력해주세요.\n');
      validateEmpty(moneyString);
      const money = Number(moneyString);
      validateMoney(money);
      return money;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
