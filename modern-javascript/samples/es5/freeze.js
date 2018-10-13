'use strict';
         
const sam = Object.freeze({ name: 'Sam', age: 2, address: { street: 1 } });
console.log(sam);

sam = sam;  // ERROR
sam.age = 4;  // ERROR
sam.address.street = 7;  // freeze is shallow, does not go deep

console.log(sam);
