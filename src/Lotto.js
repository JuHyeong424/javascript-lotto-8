class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

    const duplicatedNumber = new Set(numbers);
    if (duplicatedNumber.size !== numbers.length) throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');

    const isOutOfRange = numbers.some((number) => number < 1 || number > 45);
    if (isOutOfRange) throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');

    const hasNaN = numbers.some((number) => isNaN(number));
    if (hasNaN) throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');

    const isNotInteger = numbers.some((number) => !Number.isInteger(number));
    if (isNotInteger) throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
  }

  #sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
