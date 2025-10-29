import {Console} from "@woowacourse/mission-utils";

export async function inputPickedLottoNumber() {
  const inputStringLotto = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  const stringLottoArray = inputStringLotto.split(',');
  return stringLottoArray.map(Number);
}
