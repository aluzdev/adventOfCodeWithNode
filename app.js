const fs = require("fs");

function solve(puzzle) {
  const noCardText = /Card \d+:/;

  puzzle.split("\n").forEach((element) => {
    let winningNumbersAndMyNumbers = element
      .replace(noCardText, "")
      .trim()
      .split(" | ");
    let [winningNumbers, myNumbers] = winningNumbersAndMyNumbers;
    console.log({ winningNumbers, myNumbers });
  });
  return -1;
}

fs.readFile("./mini.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const solution = solve(data);
  console.log(solution); // Output: 4361
});
