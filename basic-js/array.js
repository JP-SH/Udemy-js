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

// push and pop
let fruits = ['apple', 'banana'];
fruits.push('orange');

// console.log(fruits);  Output: ['apple', 'banana', 'orange']
let removedFruit = fruits.pop();

// console.log(fruits);        Output: ['apple', 'banana']
// console.log(removedFruit);  Output: 'orange'

// shift and unshift
let colourz = ['blue', 'green'];
colourz.unshift('red');

// console.log(colourz);  Output: ['red', 'blue', 'green']
let removedColour = colourz.shift();

console.log(colourz);       // Output: ['blue', 'green']
console.log(removedColour); // Output: 'red'

// destructuring array
const colours = ['red', 'green', 'blue'];

const [firstColour, secondColour, thirdColour] = colours;

console.log(firstColour);  // 'red'
console.log(secondColour); // 'green'
console.log(thirdColour);  // 'blue'

// multi nested array
const nestedArray = [
  { name: "Jay", age: 25 },
  [
    { name: "Kay", age: 30 },
    [
      { name: "Kev", age: 35 },
      { name: "Harry", age: 40 }
    ]
  ],
  [
    { name: "Ron", age: 28 }
  ]
];
