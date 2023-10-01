export function findTheOddInt(input: number[]): number | undefined {
  const countObject: findTheOddInt = {};
  input &&
    input.forEach((el) => {
      if (countObject[el]) {
        countObject[el] = Number(countObject[el]) + 1;
      } else {
        countObject[el] = 1;
      }
    });

  for (const key in countObject) {
    if (countObject[key] % 2 !== 0) {
      return Number(key);
    }
  }
}
