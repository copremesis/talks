'use strict';
         
// const is like
// - final in Java
// - readonly in C#

// it protects primitives and references only
// it does not protect contents within an object

const sam = { name: 'Sam', age: 2 }
console.log(sam);

sam = sam;  // ERROR

sam.age = 4;
console.log(sam);
