import { findTheOddInt } from "../functions/findTheOddInt";

describe("Test function findTheOddInt", function () {
  test("Test input with [7]", () => {
    const result = findTheOddInt([7]);
    expect(result).toEqual(7);
  });
  test("Test input with [0]", () => {
    const result = findTheOddInt([0]);
    expect(result).toEqual(0);
  });
  test("Test input with [1,1,2]", () => {
    const result = findTheOddInt([1, 1, 2]);
    expect(result).toEqual(2);
  });
  test("Test input with [0,1,0,1,0]", () => {
    const result = findTheOddInt([0, 1, 0, 1, 0]);
    expect(result).toEqual(0);
  });
  test("Test input with [1,2,2,3,3,3,4,3,3,3,2,2,1]", () => {
    const result = findTheOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
    expect(result).toEqual(4);
  });
});
