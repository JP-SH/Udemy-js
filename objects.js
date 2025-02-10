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

// adding methods to functions
// const math = {
//   numbers: [1, 2, 3, 4, 5, 6],
//   add: function(x, y) {
//     return x + y;
//   },
//   multiply: function(x,y) {
//     return x * y;
//   }
// }

// theres is a new shorthand way to write this so you dont need to :
const math = {
  numbers: [1, 2, 3, 4, 5, 6],
  add(x, y) {
    return x + y;
  },
  multiply(x,y) {
    return x * y;
  }
}
// when you call a function inside of a object so in this example math.add(x,y) its a method
// but if it wasnt inside of it and i was calling it directly such as add(x,y) its still a function

// 'this' is a reference to the current execution scope. It will give you an object back so depending on the scope and the rules
function sayHi() {
  console.log("HI")
  // 'this referes to the window (global scope object in the browser)
  console.log(this);
}

// const player = {
//   first: 'Kevin',
//   last: 'De Bruyne',
//   nickName: 'KDB',
//   // in this example 'this' refers to the object its in. It can be useful as it's a method thats aware of the other contents in its object
//   fullName() {
//     console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
//   }
// }
// a way to write the same object but with destructuring
const player = {
  first: 'Kevin',
  last: 'De Bruyne',
  nickName: 'KDB',
  fullName() {
    const {first, last, nickName} = this;
    return(`${first} ${last} AKA ${nickName}`);
  },
  // adding another method to the object that calls a different method using 'this'
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is the greatest to ever do it`)
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says hahaah`)
    // the reason this doesnt work is because arrow functions dont change the value of 'this' whereas normal functions do. Which is why we dont generally use arrow functions as methods in a lot of the methods we write we want to have access to the parent object.
  }
}

// however the value of 'this' depends on the invocation context of the function its used in meaning the value will change based on how the function is executed not just where you write it
const printBio = player.printBio;
// when we previosuly called it in the console using 'player.printBio()' it worked because by using 'player.' first it sets 'printBio()' to it. But when we call this variable we created we would be calling it as just 'printBio()' which sets 'this' to the window and makes it not work


const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    // const phrases = this.phrases --> the destructured way to write this same line
    const {phrases} = this;
    const idx = Math.floor(Math.random() * phrases.length)
    return phrases[idx];
  },
  // start() {
  //   setInterval(function () {
  //     console.log(this.pickPhrase())
  //   },3000)
  // }
  // this doesnt work because 'this' changes depending on how its called. In this example we are calling 'start' ourselves as a method using annoyer.Start. But the function weve written isnt being called by us its being called by 'setInterval' and because of the way its called 'this' is set to the window object
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase())
    }, 3000)
  },
  // the reason it works with the arrow functions is because they dont get their own 'this' meaning it doesnt change the value of this.Which means it doesnt change the value of this it gets the value of it from the start method (which has set the value of it to the object not the window)
  stop() {
    clearInterval(this.timerId);
  }
}
