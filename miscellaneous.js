// how to write a function incase a second argument isnt passed in
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// the best way to write it now though is using 'DEFAULT PARAMS'
// function multiply(x, y = 1) {
//   return x * y;
// }

function greeting(name, greeting = 'ayooo') {
    console.log(`${greeting} ${name}`);
}

// spread
function giveMeFour(a,b,c,d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}
const colours = ['red', 'yellow','green', 'blue'];

// if i was to call giveMeFour(colours) it would only console.log the first line as its one array
// but if i did giveMeFour(...colours) it would console.log all four lines as it spreads them from one array into four arguments

// using spready to combine arrays
const epl = ['man city', 'man utd', 'liverpool']
const laLiga = ['real madrid', 'barcelona', 'atletico madrid']

// to combine them i could go const soccerTeams = [...epl,...laliga]

// making copies using spread
const epl2 = [...epl]

// spread can also be used the same way on objects

const dog = {
  legs: 4,
  isCute: 'yes'
}

const tommy = {
  ...dog,
  gender: 'male',
  build: 'small'
}

// to create a function that doesnt have a limit on the number of arguments you use rest

function sum(...nums) {
  return nums.reduce((totalVal, currentVal) => {
    return totalVal + currentVal
  })
}

// another way to write a similar function
const multiply = (...nums) => (
  nums.reduce((total, currentVal) => total * currentVal)
)

// destructuring array
const raceResults = [
  'Usain Bolt',
  'Kyle Walker',
  'Eliud Kipchogie',
  'Tyson Gay',
  'Neil Armstrong'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];
// instead of writing it like this you can write it like this
const [gold, silver, bronze] = raceResults;
// if you wanted to get the first and the fourth only
const [first, , , fourth] = raceResults;
// can use rest for this as well
const [winnner, ,...others] = raceResults;

// destructuring object
const runner = {
  firstName: "Eliud",
  last: "Kipchogie",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

const {
  firstName,
  last,
} = runner;

// changing the name of the key and also using rest on an object
const {
  country: nation,
  ...otherDetails
} = runner;

// destructuring parameters
