const fs = require("fs");

function transformInputIntoArrayOfWinningNumbersAndMyNumbers(puzzle) {
  const noCardText = /Card \d+:\s+/;
  let winCards = [];
  let myCards = [];
  puzzle.split("\n").forEach((row) => {
    let winningNumbersAndMyNumbers = row
      .trim()
      .replace(noCardText, "")
      .split(" | ");
    let [a, b] = winningNumbersAndMyNumbers;
    winCards.push(
      a?.split(" ").filter((token) => token !== "" && token !== undefined)
    );
    myCards.push(
      b?.split(" ").filter((token) => token != "" && token !== undefined)
    );
  });
  // console.log({ winCards, myCards });
  return [winCards, myCards];
}

function solve(puzzle) {
  const [winningNumbers, myNumbers] =
    transformInputIntoArrayOfWinningNumbersAndMyNumbers(puzzle);
  const winningSet = new Set(...winningNumbers);

  for (let i = 0; i < myNumbers.length; i++) {
    for (let j = 0; j < myNumbers[i]?.length; j++) {
      let num = myNumbers[i][j];
      if (winningSet.has(num)) {
        console.log("hi mum");
      }
    }
  }
}

fs.readFile("./mini.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const solution = solve(data);
  console.log(solution); // Output: 4361
});
