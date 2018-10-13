'use strict';

var foo = function() {
  
  {
    // javascript will hoist variables declared with var
    // i.e. it moves the declaration to the top,
    // so the variable can be used before it is declared

    // variable is already in scope, just not assigned
    console.log("hoisted: " + local); 

    var local = 8;       
    console.log("local: " + local);
  }                                     
  
  // variable is accessible outside of block where it is defined
  // you can also hoist out of block scope
  console.log("no block scope: " + local);
}

foo();
