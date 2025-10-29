import {Console} from "@woowacourse/mission-utils";

function validateEmpty(bonusString) {
  const trimBonus = bonusString.trim();
  if (trimBonus.length === 0) throw new Error('[ERROR] 보너스 번호를 입력해야 합니다.');
}

function validateBonus(bonusNumber, pickedLottoNumber) {
  if (bonusNumber < 1 || bonusNumber > 45) throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  if (!Number.isInteger(bonusNumber)) throw new Error('[ERROR] 보너스 번호는 정수여야 합니다.');
  if (pickedLottoNumber.includes(bonusNumber)) throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
}

export async function inputPickedBonusNumber(pickedLottoNumber) {
  while (true) {
    try {
      const bonusString = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
      validateEmpty(bonusString);
      const bonusNumber = Number(bonusString);
      validateBonus(bonusNumber, pickedLottoNumber);
      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
