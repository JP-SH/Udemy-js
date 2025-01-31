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
