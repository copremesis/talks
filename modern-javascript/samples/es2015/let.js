'use strict';

let foo = function() {
  let local1 = 7;
  // let local1 = 7;  // ERROR: no redefine when you have let
  console.log(local1);

  {
    // console.log(local2);  // ERROR: no hoisting
    let local2 = 8;      
    console.log(local2);
  }                                   
  // console.log(local2); // ERROR: out of scope
}

foo();
