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

// find
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
]

const movie = movies.find(m => {
  return m.includes('Mrs');
})

const movie2 = movies.find(m => m.indexOf('Mrs') === 0);


const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36
  }
]

const goodBook = books.find(b => (b.rating >= 4.4))
const neilBook = books.find(b => {
  return b.authors.includes('Neil Gaiman');
})

const numbers2 = [34,35,67,54,109,102,32,9];

// filter
const odds = numbers2.filter(n => (
  n % 2 === 1
))
const evens = numbers2.filter(n => {
  return n % 2 === 0;
})

const query = 'The';
const results = books.filter(book => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
})
