const fs = require("fs");

function solve(puzzle) {
  puzzle.split("\n").forEach((element) => {
    console.log(element.split(" | "));
    element.split(" | ");
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
