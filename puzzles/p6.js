// Time:      7  15   30
// Distance:  9  40  200

const racesMini = [
  [7, 9],
  [15, 40],
  [30, 200],
];

const racesBig = [
  [62, 664],
  [73, 1023],
  [75, 1240],
  [65, 1023],
];

const puzzleSixSolution = (races) => {
  let recordsBrokenInEachRace = [];
  const getDistance = (totalRaceTime, timePressed) =>
    (totalRaceTime - timePressed) * timePressed;
  let recordBrokenCounter = 0;

  for (race of races) {
    let [totalRaceTime, recordDistance] = race;
    for (let i = 0; i < totalRaceTime + 1; i++) {
      const distance = getDistance(totalRaceTime, i);
      const isRecord = distance > recordDistance;
      console.log({ distance, recordDistance, isRecord });
      if (isRecord) {
        recordBrokenCounter++;
      }
    }
    recordsBrokenInEachRace.push(recordBrokenCounter);
    recordBrokenCounter = 0;
  }
  return recordsBrokenInEachRace.reduce((acc, curr) => acc * curr);
};

console.log(puzzleSixSolution(racesBig));
