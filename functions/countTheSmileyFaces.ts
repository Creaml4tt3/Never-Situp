export function countTheSmileyFaces(textArray: string[]): number {
  const eyes = [":", ";"];
  const noeses = ["-", "~"];
  const smiles = [")", "D"];
  let countSmiley = 0;
  textArray &&
    textArray.forEach((text) => {
      const charArray = Array.from(text);
      switch (charArray.length) {
        case 2:
          if (
            eyes.indexOf(charArray[0]) !== -1 &&
            smiles.indexOf(charArray[1]) !== -1
          ) {
            countSmiley++;
          }
          break;
        case 3:
          if (
            eyes.indexOf(charArray[0]) !== -1 &&
            noeses.indexOf(charArray[1]) !== -1 &&
            smiles.indexOf(charArray[2]) !== -1
          ) {
            countSmiley++;
          }
          break;
      }
    });
  return countSmiley;
}
