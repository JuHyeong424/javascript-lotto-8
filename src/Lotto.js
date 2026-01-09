class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 중복 번호가 존재합니다.')
    }
  }
}

export default Lotto;
