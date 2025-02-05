// for each
//  const numbers = [20,21,22,23,24,25,26,27];

//  numbers.forEach(function(num){
//     console.log(num * 2);
//  })

//  another way to use for each by declaring a function first. The main difference is that this is a function I can re use it
//  function printTriple(num) {
//   console.log(num * 3);
//  }

//  numbers.forEach(printTriple);

// // for each not only passes in the element but also the index. Using a second argument allows you to get the index as well
// numbers.forEach(function(num, idx) {
//   console.log(idx, num);
// })

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

//  map
const titles = books.map(function(book){
  return book.title;
})

//  3 different ways to write the same thing
 books.forEach(function(book){
    console.log(book.title.toUpperCase())
 })

 for (let book of books) {
    console.log(book.title.toUpperCase());
 }

 for (let i = 0; i < books.length; i++){
    console.log(books[i].title.toUpperCase());
 }

//  map
const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap', 'byop', 'rsvp', 'diy'];

const doubles = numbers.map(function(num){
  return num * 2;
})


const numDetails = numbers.map(function(n){
  return {
    value: n,
    isEven: n % 2 ===0
  }
})

const addDot = words.map(function(word){
  return word.toUpperCase().split('').join('.')
})
