// simple arrow function. It replaces the 'function' in function expressions

// const square = function(x) {
//   return x * x;
// }

// // how to write it with a arrow function
// const square = (x) => {
//   return x * x;
// }

// if you only have one parameter you dont have to use parens
const isEven = num => {
  return num % 2 === 0;
}

// if you have more than one parameter then you have to use parens
const muultiply = (x,y) => {
  return x * y;
}

// if theres no parameters use an empty parens
const Greeting = () => {
  return "WAZZZZZZA";
}

// when you have expression that you want to be returned you can use implicit return
// const divide = (x,y) => (
//   x / y
// )
// can also write it on a single line
const divide = (x,y) => x / y;

const numbers = [1,2,3,4,5,6,7,8,9];

const doubles = numbers.map(function(n){
  return n * 2;
})

const triples = numbers.map(n => {
  return n * 3;
})

const quadruple = numbers.map(n => n * 4)

const parityList = numbers.map(function(n){
  if (n % 2 === 0) return 'even';
  return 'odd';
})

const parityList2 = numbers.map(n => {
  if (n % 2 === 0) return 'even';
  return 'odd';
})

const parityList3 = numbers.map(n => n % 2 === 0 ? 'even' : 'odd')
