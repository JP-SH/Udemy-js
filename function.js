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
