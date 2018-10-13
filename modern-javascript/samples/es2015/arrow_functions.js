'use strict';

//const greet = function(name) {
// console.log(`Hello ${name}`); 
//}

const greet = name => console.log(`Hello ${name}`); 

greet('Joe');

// (parameter list) => single line body;
//
// or
//
// (parameter list) => { ... multiple lines ... }
// This pattern is called bad-idea pattern

// regular functions have lexical scope for all variables
// except local and parameters, and
// except this and arguments (which are dynamically scoped)

// let value = 4;
// let printIt = () => console.log("The value is " + value);
// value = 0;
// printIt();

// arrow functions have lexical scope for all variables
// except local and paramters
// don't use arrow functions for methods of a class
// arrow functions can't be generators
