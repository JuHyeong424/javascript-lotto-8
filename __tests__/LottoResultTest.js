import {getLogSpy, mockQuestions, mockRandoms} from "../src/utils/testUtils.js";
import App from "../src/App.js";

describe("로또 기능 실행 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("1등 당첨 시나리오", async () => {
    const logSpy = getLogSpy();
    const purchasedLotto = [1, 2, 3, 4, 5, 6];
    mockRandoms([purchasedLotto]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("1개를 구매했습니다."));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[1, 2, 3, 4, 5, 6]"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("6개 일치 (2,000,000,000원) - 1개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 200000000.0%입니다."));
  });

  test("2등 당첨 시나리오", async () => {
    const logSpy = getLogSpy();
    const purchasedLotto = [1, 2, 3, 4, 5, 7];
    mockRandoms([purchasedLotto]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 3000000.0%입니다."));
  });

  test("3등 당첨 시나리오", async () => {
    const logSpy = getLogSpy();
    const purchasedLotto = [1, 2, 3, 4, 5, 8];
    mockRandoms([purchasedLotto]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치 (1,500,000원) - 1개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 150000.0%입니다."));
  });

  test("4등 당첨 시나리오", async () => {
    const logSpy = getLogSpy();
    const purchasedLotto = [1, 2, 3, 4, 8, 9];
    mockRandoms([purchasedLotto]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("4개 일치 (50,000원) - 1개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 5000.0%입니다."));
  });

  test("5등 당첨 시나리오", async () => {
    const logSpy = getLogSpy();
    const purchasedLotto = [1, 2, 3, 8, 9, 10];
    mockRandoms([purchasedLotto]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개 일치 (5,000원) - 1개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 500.0%입니다."));
  });

  test("당첨되지 않는 시나리오", async () => {
    const logSpy = getLogSpy();
    const purchasedLotto = [10, 11, 12, 13, 14, 15];
    mockRandoms([purchasedLotto]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개 일치 (5,000원) - 0개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("4개 일치 (50,000원) - 0개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치 (1,500,000원) - 0개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치, 보너스 볼 일치 (30,000,000원) - 0개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("6개 일치 (2,000,000,000원) - 0개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 0.0%입니다."));
  });

  test("여러 장 구매 및 혼잡 결과 시나리오", async () => {
    const logSpy = getLogSpy();
    mockRandoms([
      [1, 2, 3, 8, 9, 10],
      [10, 11, 12, 13, 14, 15],
      [1, 2, 3, 4, 8, 9],
    ]);
    mockQuestions(["3000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개를 구매했습니다."));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("3개 일치 (5,000원) - 1개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("4개 일치 (50,000원) - 1개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("5개 일치 (1,500,000원) - 0개"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("총 수익률은 1833.3%입니다."));
  });
});
