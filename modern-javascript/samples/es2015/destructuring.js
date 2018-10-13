'use strict';

const getData = function() {
  return [1, 2, 3];
}

// this is no fun
const result = getData();
console.log(`${result[0]} ${result[1]} ${result[2]}`);

// instead, we can unpack and name in one smooth motion
// const [a, b, c] = getData();
// console.log(`${a} ${b} ${c}`);

// throw away data you don't need
// const [,,three] = getData();
// console.log(three);

// or we can even add declarations
// const [w, x, y, z = 4] = getData();
// console.log(`${w} ${x} ${y} ${z}`);

// combine with rest operator 
// const [foo, ...bar] = getData();
// console.log(`${foo} ${bar}`);

// what if we want to print an object's data?
// const sam = {name: 'Sam', age: 20, height: 75};

// this works, but it could be better
// const print1 = function(person) {
  // console.log(`Name: ${person.name}, Age: ${person.age}, Height: ${person.height}`);
// }
// print1(sam);

// we can unpack sam similar to the array above
// let name, age, height;
// ({name, age, height} = sam);
// const print2 = function(name, age, height) {
  // console.log(`Name: ${name}, Age: ${age}, Height: ${height}`);
// }
// print2(name, age, height);


// we can destructure the object when passing to the function
// you can even rename the properties
// const print3 = function({ name, age, height: ht }) {
  // console.log(`Name: ${name}, Age: ${age}, Height: ${ht}`);
// }
// print3(sam);

