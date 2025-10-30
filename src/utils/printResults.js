import {Console} from "@woowacourse/mission-utils";
import {PRINT_RESULTS} from "../constants/printConstants.js";

export function printResults(rankCounts) {
  Console.print(PRINT_RESULTS.HEADER);
  Console.print(PRINT_RESULTS(rankCounts).FIFTH);
  Console.print(PRINT_RESULTS(rankCounts).FOURTH);
  Console.print(PRINT_RESULTS(rankCounts).THIRD);
  Console.print(PRINT_RESULTS(rankCounts).SECOND);
  Console.print(PRINT_RESULTS(rankCounts).FIRST);
}
