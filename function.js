// simple function
function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`you rolled ${roll}`);
}

// function with argument
function greet(name) {
  console.log(`wasssuppp ${name}`)
}

function throwDice (numRolls) {
  for (let i = 0; i < numRolls; i++){
    rollDie();
  }

}

// simple function with multiple arguments (parameters)
function sum(x, y) {
  console.log(x + y);
}

// simple function with return
function add(x,y) {
  return x + y;
}

function isPurple(colour) {
  if (colour.toLowerCase() === 'purple') {
  return true;
  }
  else {
    return false;
  }
}

function isPurple(colour) {
  if (colour.toLowerCase() === 'purple') {
  return true;
  }
  // since returns end function execution you can remove the else
    return false;
}


function isPurple(colour) {
  // since '===' is a boolean statement you can write it all in one line
  return (colour.toLowerCase() === 'purple')

}

function containsPurple(arr) {
  for (let colour of arr) {
    if (colour === 'purple' || colour === 'magenta'){
    return true;
    }
  }
  return false;
}


// different ways to create password validator that checks is password is longer than 8 characters, contains no spaces and doesnt have the username in it
// function isValidPassword(password, username) {
//   if(password.length < 8  ) {
//     return false;
//   }
//   if(password.indexOf(' ') !== -1){
//     return false;
//   }
//   if(password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexof(' ') !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// function isValidPassword(password,username) {
//   const tooShort = password.length < 8;
//   const hasSpaces = password.indexOf(' ') !== -1;
//   const tooSimilar = password.indexOf(username) !== -1;
//   if (tooSimilar && hasSpaces || tooSimilar) return false;
//   return true;
// }

function isValidPassword(password, username) {
  const tooShort = password.length < 8;
  const hasSpaces = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooSimilar && !hasSpaces && !tooSimilar;
}

// function to find the average value in an array of numbers
function avg(array) {
  let total = 0;
  for(let num of array){
    total += num
  }
  return total / array.length;
}

// function to check if sentence contains every letter of the aplhabet
function isPangram(sentence) {
  let = lowerCased = sentence.toLowerCase();
  for (let char of 'abcdefghijklmnopqrstuvwxyz'){
    if (lowerCased.indexOf(char) === -1)
      return false;
  }
  return true;
}

// function that returns a random playing card in a object
// function getCard() {
//   const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//   const valIdx = Math.floor(Math.random() * values.length);
//   const value = values[valIdx];

//   const suits = ['clubs', 'spades', 'hearts', 'diamonds' ];
//   const suitIdx = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitIdx];
//   return {values: value, suits: suit};
// }

function pick(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

function getCard() {
  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const value = pick(values);

  const suits = ['clubs', 'spades', 'hearts', 'diamonds' ];
  const suit = pick(suits);
  return {value: value, suits: suit};
  // and even shorter way to write it without creating the value and suit vairable is
  // return {value: pick(values), suit: pick(suits)};
}

// anonymous functions
// let numbers = [10, 20, 30, 40, 50];

// let squareNumbers = numbers.map(function(number) {
//   return number * number;
// });

// nested functions
// function outerFun(a) {
//   function innerFun(b) {
//       return a + b;
//   }
//   return innerFun;
// }

// const addTen = outerFun(10);
// console.log(addTen(5));
