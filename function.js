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
