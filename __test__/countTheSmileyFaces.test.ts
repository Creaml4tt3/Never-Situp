import { countTheSmileyFaces } from "../functions/countTheSmileyFaces";

describe("Test function countTheSmileyFaces", function () {
  test("Test input with [':)', ';(', ';}', ':-D']", () => {
    const result = countTheSmileyFaces([":)", ";(", ";}", ":-D"]);
    expect(result).toEqual(2);
  });
  test("Test input with [';D', ':-(', ':-)', ';~)']", () => {
    const result = countTheSmileyFaces([";D", ":-(", ":-)", ";~)"]);
    expect(result).toEqual(3);
  });
  test("Test input with [';]', ':[', ';*', ':$', ';-D']", () => {
    const result = countTheSmileyFaces([";]", ":[", ";*", ":$", ";-D"]);
    expect(result).toEqual(1);
  });
  test("Test input with []", () => {
    const result = countTheSmileyFaces([]);
    expect(result).toEqual(0);
  });
});
