import {getLogSpy, mockQuestions, mockRandoms} from "../src/utils/testUtils.js";
import App from "../src/App.js";

describe("오류 후 재시도 기능 테스트", () => {
  test("잘못된 구입 금액을 입력하면 재입력을 받아 정상 처리되어야 한다.", async() => {
    const logSpy = getLogSpy();
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1500", "1000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 구입 금액을 1,000원 단위여야 합니다."));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1개를 구매했습니다."));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 200000000.0%입니다."));
  });

  test("잘못된 당첨 번호를 입력하면 재입력을 받아 정상 처리되어야 한다.", async () => {
    const logSpy = getLogSpy();
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,5", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 로또 번호에 중복된 숫자가 있습니다."));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("6개 일치 (2,000,000,000원) - 1개"));
  });

  test("잘못된 보너스 번호를 입력하면 재입력을 받아 정상처리되어야 한다.", async () => {
    const logSpy = getLogSpy();
    mockRandoms([[1, 2, 3, 4, 5, 7]]);
    mockQuestions(["1000", "1,2,3,4,5,6", "6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다."));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"));
  });
});
