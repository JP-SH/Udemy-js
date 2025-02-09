// shorthand properties
// when you wanted to create object literals with variables this is how you used to write it
// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum /arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg
//   }
// }

// however you can now write it like this
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum /arr.length;
  return {
    max,
    min,
    sum,
    avg
  }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);

// computes properties to create dynamic keys for objects

const role = 'host';
const person = 'Jools Holland';

// old way of writing it
// const team = {}
// team[role] = person;

// new way of writing it
const team = {
  [role]: person
}

// a function that accepts a object that returns a copy of that object with a new property added in
// function addProp(obj, k, v) {
//   const copy = {...obj};
//   copy[k] = v;
//   return copy
// }

// how to write it using computed properties
// const addProp = (obj, k, v) => {
//   return {...obj, [k]: v}
// }

// how to write it on one line using implicit return
const addProp = (obj, k, v) => ({...obj, [k]: v});
// the reason you have to using the curly bracked inside the () is because it would think the code inside the curly brackets is a function body and wouldnt know we are trying to implicitly return a object.
