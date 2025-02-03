// simple for loop
// for  (let j = 1;
//   j <= 10;
//   j++) {
//   console.log('AYOOO',j);
//   }


// perfect square loop
// for (let square = 1; square <= 20; square++){
//   console.log(`${square} x ${square} ${square * square}`);



// // counting down loop
for (let sub = 200; sub >= 0; sub -= 25){
  console.log(sub);
}

for loop to iterate over an array
myStudents = [
  {
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 97
  },
  {
    firstName: 'Hera',
    grade: 72
  },
  {
    firstName: 'Apollo',
    grade: 90
  }
]

for (let i = 0; i < myStudents.length; i++){
  let student = myStudents[i];
  console.log(`${student.firstName} scored a grade of ${student.grade}`);
}


// for loop nested
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2]
]

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++){
  let row = gameBoard[i];
  for (let j = 0; j < row.length; j++){
    totalScore += row[j];
  }
}


// for of loop
// for (let char of 'manchester city') {
//   console.log(char.toUpperCase());
// }


// nexted for of loop
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}


// for in loop
const jeopardyWinnings = {
  regularPlay: 2522700,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000
};

for (let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}

// for of loop inside of function
function isPangram(sentence) {
  for (let char of 'abcdefghijklmnopqrstuvwxyz'){
    if (sentence.indexOf(char) === -1)
      return false;
  }
  return true;
}
