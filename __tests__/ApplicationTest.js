import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

describe("구입 금액 예외", () => {
  test.each([
    ["1000j", "[ERROR] 구입 금액은 숫자여야 합니다."],
    ["1500", "[ERROR] 구입 금액을 1,000원 단위여야 합니다."],
    ["", "[ERROR] 구입 금액을 입력해야 합니다."],
    ["-1000", "[ERROR] 구입 금액은 양수여야 합니다."],
    ["1000.5", "[ERROR] 구입 금액은 정수여야 합니다."],
  ])("입력: %s", async (input, expectedError) => {
    const logSpy = getLogSpy();
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedError));
  });
});

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("기능 테스트", async () => { /* ... 기존 코드 ... */ });

  describe("예외 테스트", () => {
    describe("구입 금액 예외", () => {
      test.each([
        ["1000j", "[ERROR] 구입 금액은 숫자여야 합니다."],
        ["1500", "[ERROR] 구입 금액을 1,000원 단위여야 합니다."],
        ["", "[ERROR] 구입 금액을 입력해야 합니다."],
        ["-1000", "[ERROR] 구입 금액은 양수여야 합니다."],
        ["1000.5", "[ERROR] 구입 금액은 정수여야 합니다."],
      ])("입력: %s", async (invalidInput, expectedError) => {
        const logSpy = getLogSpy();
        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions([invalidInput, ...INPUT_NUMBERS_TO_END]);

        const app = new App();
        await app.run();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedError));
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은"));
      });
    });

    describe("당첨 번호 예외", () => {
      test.each([
        ["", "[ERROR] 당첨 번호를 입력해야 합니다."],
        ["1,2,3,4,5,a", "[ERROR] 당첨 번호는 숫자와 쉼표(,)만을 사용하여 입력해야 합니다."],
        ["1,2,3,4,5,", "[ERROR] 쉼표(,)가 올바르게 사용되지 않았습니다. (예: 1,2,3)"],
        ["1,2,3,4,5,5", "[ERROR] 로또 번호에 중복된 숫자가 있습니다."],
        ["1,2,3,4,5", "[ERROR] 로또 번호는 6개여야 합니다."],
        ["1,2,3,4,5,46", "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."],
      ])("입력: %s", async (invalidInput, expectedError) => {
        const logSpy = getLogSpy();
        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(["1000", invalidInput, ...INPUT_NUMBERS_TO_END.slice(1)]);

        const app = new App();
        await app.run();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedError));
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은"));
      });
    });

    describe("보너스 번호 예외", () => {
      test.each([
        ["", "[ERROR] 보너스 번호를 입력해야 합니다."],
        ["7.5", "[ERROR] 보너스 번호는 정수여야 합니다."],
        ["a", "[ERROR] 보너스 번호는 숫자여야 합니다."],
        ["46", "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다."],
        ["6", "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다."],
      ])("입력: %s", async (invalidInput, expectedError) => {
        const logSpy = getLogSpy();
        mockRandoms([[1, 2, 3, 4, 5, 6]]);
        mockQuestions(["1000", "1,2,3,4,5,6", invalidInput, ...INPUT_NUMBERS_TO_END.slice(2)]);

        const app = new App();
        await app.run();

        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedError));
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은"));
      });
    });
  });
});
