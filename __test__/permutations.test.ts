import { permutations } from "../functions/permutaions";

describe("Test function permutations", function () {
  test("Test input with 'a'", () => {
    const result = permutations("a");
    expect(result).toEqual(["a"]);
  });
  test("Test input with 'ab'", () => {
    const result = permutations("ab");
    expect(result).toEqual(["ab", "ba"]);
  });
  test("Test input with 'abc'", () => {
    const result = permutations("abc");
    expect(result).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"]);
  });
  test("Test input with 'aabb'", () => {
    const result = permutations("aabb");
    expect(result).toEqual(["aabb", "abab", "abba", "baab", "baba", "bbaa"]);
  });
});
