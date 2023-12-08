const fs = require("fs");

fs.readFile("./puzzles/p4_big.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const puzzleSolver = require("./solutions/puzzle4");
  const solution = puzzleSolver(data);
  console.log(solution);
});
