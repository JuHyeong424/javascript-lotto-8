import {getLogSpy, mockQuestions, mockRandoms} from "../src/utils/testUtils.js";
import App from "../src/App.js";

describe("입력 및 출력 케이스 테스트", () => {
  test("당첨 번호 입력 시 공백이 포함되어 있어도 정상 처리되어야 한다.", async () => {
    const logSpy = getLogSpy();
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", " 1, 2, 3, 4, 5, 6 ", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("6개 일치 (2,000,000,000원) - 1개"));
  });

  test("수익률 계산 시 소수점 둘째 자리에서 반올림되어야 한다.", async () => {
    const logSpy = getLogSpy();
    mockRandoms([
      [1, 2, 3, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
      [37, 38, 39, 40, 41, 42],
      [43, 44, 45, 7, 8, 9],
      [1, 4, 13, 14, 15, 16],
    ]);
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 62.5%입니다."));
  });

  test("구매한 로또 번호는 오름차순으로 정렬되어 출력되어야 한다.", async () => {
    const logSpy = getLogSpy();
    mockRandoms([[6, 5, 4, 3, 2, 1]]);
    mockQuestions(["1000", "10,11,12,13,14,15", "16"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[1, 2, 3, 4, 5, 6]"));
  });
});
