export function permutations(text: string) {
  const charArray: string[] = [];
  const textArray = Array.from(text);

  switch (text.length) {
    case 1:
      return [text];
    case 2:
      return [text, text[1] + text[0]];
  }

  textArray.forEach((char: string, index: number, array: string[]) => {
    const clondedArray = array.slice();
    clondedArray.splice(index, 1);
    permutations(clondedArray.join("")).forEach((slicedText: string) => {
      charArray.push(char + slicedText);
    });
  });

  return Array.from(new Set(charArray));
}
