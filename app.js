const fs = require("fs");

function solve(puzzle) {
  const noCardText = /Card \d+:\s+/;
  let winningNumbers = [];
  let myNumbers = [];

  puzzle.split("\n").forEach((row) => {
    let winningNumbersAndMyNumbers = row
      .trim()
      .replace(noCardText, "")
      .split(" | ");
    let [a, b] = winningNumbersAndMyNumbers;
    winningNumbers.push(a?.split(" ").filter((token) => token != ""));
    myNumbers.push(b?.split(" ").filter((token) => token != ""));
  });
  console.log({ winningNumbers, myNumbers });
}

fs.readFile("./mini.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const solution = solve(data);
  console.log(solution); // Output: 4361
});
