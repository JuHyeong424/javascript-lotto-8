import {Console, Random} from "@woowacourse/mission-utils";

export async function printPurchaseList(purchaseCount) {
  const purchaseResultArray = [];
  Console.print('');
  Console.print(`${purchaseCount}개를 구매했습니다.`);
  for (let i = 0; i < Number(purchaseCount); i++) {
    const random = Random.pickUniqueNumbersInRange(1, 45, 6);
    Console.print(random);
    purchaseResultArray.push(random);
  }
  return purchaseResultArray;
}
