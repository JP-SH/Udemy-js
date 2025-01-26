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
// for (let sub = 200; sub >= 0; sub -= 25){
//   console.log(sub);
// }

// for loop to iterate over an array
// myStudents = [
//   {
//     firstName: 'Zeus',
//     grade: 86
//   },
//   {
//     firstName: 'Artemis',
//     grade: 97
//   },
//   {
//     firstName: 'Hera',
//     grade: 72
//   },
//   {
//     firstName: 'Apollo',
//     grade: 90
//   }
// ]

// for (let i = 0; i < myStudents.length; i++){
//   let student = myStudents[i];
//   console.log(`${student.firstName} scored a grade of ${student.grade}`);
// }


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
