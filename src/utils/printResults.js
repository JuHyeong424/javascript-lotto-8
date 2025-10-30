import {Console} from "@woowacourse/mission-utils";
import {PRINT_RESULTS} from "../constants/printConstants.js";

export function printResults(rankCounts) {
  const { HEADER, FIFTH, FOURTH, THIRD, SECOND, FIRST } = PRINT_RESULTS(rankCounts);

  Console.print(HEADER);
  Console.print(FIFTH);
  Console.print(FOURTH);
  Console.print(THIRD);
  Console.print(SECOND);
  Console.print(FIRST);
}
