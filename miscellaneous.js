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
function multiply(x, y = 1) {
  return x * y;
}

function greeting(name, greeting = 'ayooo') {
    console.log(`${greeting} ${name}`);
}
