'use strict';
 
const max = function(...numbers) {
  return numbers.reduce((large, e) => large < e ? e : large, numbers[0]);
}                   

console.log(max(1, 21, 12));

// const array = [1, 21, 12];
// console.log(max(array)); //oops, not what we intended

// what we want is
// console.log(max(array[0], array[1], array[2]));

// thankfully we don't have to do that.
// the spread operator explodes an array as discrete arguments
// console.log(max(...array));
