import {LOTTO_NUMBER_ERROR} from "./constants/errorConstants.js";
import {LOTTO_RANGE} from "./constants/lottoConstants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    const { LENGTH, DUPLICATION, OUT_OF_RANGE, HAS_NAN, NOT_INTEGER } = LOTTO_NUMBER_ERROR;
    const { START, END, TOTAL_LENGTH } = LOTTO_RANGE;

    if (numbers.length !== TOTAL_LENGTH) throw new Error(LENGTH);

    const duplicatedNumber = new Set(numbers);
    if (duplicatedNumber.size !== numbers.length) throw new Error(DUPLICATION);

    const isOutOfRange = numbers.some((number) => number < START || number > END);
    if (isOutOfRange) throw new Error(OUT_OF_RANGE);

    const hasNaN = numbers.some((number) => isNaN(number));
    if (hasNaN) throw new Error(HAS_NAN);

    const isNotInteger = numbers.some((number) => !Number.isInteger(number));
    if (isNotInteger) throw new Error(NOT_INTEGER);
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }

  countMatch(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number)).length;
  }

  hasBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
