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
  return [winCards, myCards];
}

module.exports = function puzzleFourSolution(puzzle) {
  const [winningNumbers, myNumbers] =
    transformInputIntoArrayOfWinningNumbersAndMyNumbers(puzzle);
  let totalPoints = 0;

  for (let i = 0; i < myNumbers.length; i++) {
    let countOfMyWinningNumbers = 0;
    for (let j = 0; j < myNumbers[i]?.length; j++) {
      let num = myNumbers[i][j];
      let setOfWinningNumbers = new Set(winningNumbers[i]);
      if (setOfWinningNumbers.has(num)) {
        countOfMyWinningNumbers++;
      }
    }
    let totalCardPoints = Math.floor(Math.pow(2, countOfMyWinningNumbers - 1));

    totalPoints += totalCardPoints;
  }
  return totalPoints;
};
