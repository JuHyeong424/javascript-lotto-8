import {Console} from "@woowacourse/mission-utils";

export async function inputPurchaseMoney() {
  return await Console.readLineAsync('로또 구입 금액을 입력해주세요.\n');
}
