// primitives-
// numbers
// string
// boolean
// null
// undefined

// Not a number (NaN)
0 / 0

// variables
let best = 'mancity';
// const variables value cannot be changed
const treble = 'citeh';

// post increment operator
// this returns the current value of i and then increments
// i++
// pre increment operator
// this returns the value of i after it has been incremented
// ++i

// object literal
const mancity = {
  cb: "dias",
  manager: 'pep',
  cam: 'cherki',
  lb: 'nouri',
}

// template literal
let sheep = 7;
let cows = 113;

console.log(`There are ${sheep + cows} animals on the farm`);

// math object
// to get a random number
const randNum = Math.floor(Math.random() * 10);
// there are many other method for this object such as .ceiling, .pow, .max etc etc

// comparison operators
// > - greater than
// < - less than
// >= - greater than or equal to
// <= - less than or equal to
//!= - not equal
// === - strict equality
// !== -  strict non-equality


// conditionals
// if statement
let goals = 3;

if ( goals === 3) {
  console.log('You scored a hatrick');
}

// elseif

// 0-5 = free
// 5-10 = $10
// 10-65 = $20
// 65 = $10

const age = 9;

if (age < 5) {
  console.log("You are a child you get in for free");
} else if (age < 10) {
  console.log("You are a child you pay $10");
} else if (age < 65) {
  console.log("You are an adult. You pay $20");
} else {
  console.log("You are a senior. You pay $10");
}

// else
// else will run if none of the conditionals are met

let rating = -99;

if (rating === 3) {
  console.log("You are a star");
} else if (rating === 2) {
  console.log('Meets expectation')
} else if (rating === 1) {
  console.log('Needs improvement')
} else {
  console.log('Invalid rating');
}

// nested conditional

const password = prompt("please enter a new password");

// password must be 6+ characters
// password cannot include space
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
  console.log("Valid Password");
  } else {
  console.log("Password cannot conatain spaces!");
  }
} else {
  console.log("Password is too short! Must be 6+ characters");
}

// falsy values are -
// false / 0 / ""(empty string) / null / undefined / NaN
// everything else is truthy

// logical operators
//  && this is 'and'. Both sides must be true for the entire thing to be true

// || this is 'or'. Only one side has to be true for the entire thing to be true

// ! this is 'not'. returns true if expression if false

// nested array and object
const got = {
  house: "Stark",
  pet: "Direwolf",
  members: [
    {
      name: "Ned",
      isAlive: false
    },
    {
      name: "John",
      isAlive: true
    }
  ]
};

// for loop with if else
const scores = [85, 42, 77, 59, 90, 33];

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];

  if (score >= 60) {
    console.log(`Student ${i + 1}: ${score} - Passed`);
  } else {
    console.log(`Student ${i + 1}: ${score} - Failed`);
  }
}

// while loop
function countToTen() {
  let num = 1;

  while (num <= 10) {
    console.log(num);
    num++;
  }
}

// nested loop
const classroom = [
  ["Alice", "Bob", "Charlie"],
  ["Jim", "Him", "Sully"],
  ["Kev", "Jas", "Deep"]
];


function printSeatingChart(seats) {
  let row = 0;

  while (row < seats.length) {
    let col = 0;
    let seatRow = "";

    while (col < seats[row].length) {
      seatRow += `[${seats[row][col]}] `;
      col++;
    }

    console.log(`Row ${row + 1}: ${seatRow}`);
    row++;
  }
}

// while loop with break
function countToFive() {
  let num = 1;

  while (true) {
    console.log(num);
    if (num === 5) {
      break;
    }
    num++;
  }
}

// iteration over object
const person = {
  name: "Batman",
  age: 30,
  city: "Gotham"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

const testScores = {
  Thing1: 92,
  Thing2: 76,
  Thing3: 85,
  Thing4: 59,
  Thing5: 99
};

let total = 0;

for (const score of Object.values(testScores)) {
  total += score;
}

console.log(`Total score: ${total}`);

// function
function announceWinter() {
  console.log("Winter is coming");
}

// Call  function
announceWinter();

// with argument
function welcome(name) {
  console.log(`Welcome, ${name}!`);
}

// multiple arguments
function compareNumbers(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "equal";
    }
}

function repeatString(str, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
}

// return
function add(x,y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  return x + y;
}

// function scope
function sayHello() {
    let message = "Hello, world!"; // This variable is scoped to the sayHello function
    console.log(message); // This works
}

sayHello(); // Outputs: Hello, world!

console.log(message); // Wont work. message is not defined outside the function

function outerFunction() {
    let outerVar = "I'm outside!";

    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar);  //  innerFunction can access outerFunction's variables
    }

    innerFunction();
    console.log(innerVar); // wont work.  innerVar is not accessible in outerFunction
}

outerFunction();

// block scope
let radius = 8;

if (radius > 0) {
  const PI = 3.14;

  let circ = 2 * PI * radius;
}

console.log (radius);
// 8
console.log(PI);
// not defined
console.log(circ);
// not defined

// higher order function
function repeatAction(action, times) {
  for (let i = 0; i < times; i++) {
    action();
  }
}

// this function takes the previous function as an argument
repeatAction(function() {
  console.log("Hello!");
}, 3);

// try/catch
function divide(a, b) {
  try {
    return a / b;
  } catch (e) {
    console.log("Error:", e.message);
    return null;
  }
}

function toUpper(str) {
  try {
    return str.toUpperCase();
  } catch (e) {
    console.log("Error:", e.message);
    return "";
  }
}

// foreach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  const result = num * 2;
  console.log(`Item at index ${index}: ${num} * 2 = ${result}`);
});

// map
const movies = ["The Nice Guys", "Inception", "Interstellar", ];

const uppercasedMovies = movies.map(function(title) {
  return title.toUpperCase();
});

// arrow func
// const subtract = function(x,y) {
//   return x - y;
// }

const subtract = (x,y) => {
  return x - y;
}

// implicit return
// const isEven = num => (
//   num % 2 === 0
// );
// one liner implicit return
const isEven = num => num % 2 === 0;

// default param
function rollDie(numSides = 6) {
  return Math.floor(Math.random * numSides) + 1
}

function greet(person, msg = "Greetings", punc = "!"){
  console.log(`${msg}, ${person}${punc}`)
}

// spread
const scores4 = [85, 92, 78, 99, 100];

// Math.max(scores4); = NaN
const highestScore = Math.max(...scores4);

console.log(highestScore); // Output: 100

// array
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

// Combine using spread
const combined = [...arr1, ...arr2];

console.log(combined); // Output: [1, 2, 3, 4, 5]

// rest params - it will collect all remaining arguments into an array
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
