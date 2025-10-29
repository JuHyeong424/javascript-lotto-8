import {Console} from "@woowacourse/mission-utils";

function validateMoney(money) {
  if (!Number.isInteger(money)) throw new Error('[ERROR] 구입 금액은 정수여야 합니다.');
  if (money <= 0) throw new Error('[ERROR] 구입 금액은 양수여야 합니다.');
  if (money % 1000 !== 0) throw new Error('[ERROR] 구입 금액을 1,000원 단위여야 합니다.');
}

export async function inputPurchaseMoney() {
  while (true) {
    try {
      const moneyString = await Console.readLineAsync('로또 구입 금액을 입력해주세요.\n');
      const money = Number(moneyString);
      validateMoney(money);
      return money;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
