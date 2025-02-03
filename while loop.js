simple while loop
let j = 0;
while (j < 5) {
  console.log("AYOOO", j);
  j++;
}



const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log("YOUN WIN!");
