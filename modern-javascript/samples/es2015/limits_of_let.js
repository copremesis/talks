'use strict';

let value = 4;
let printIt = () => console.log("The value is " + value);

// let allows reassignment
value = 0;

// but what will be printed? i.e. code that make the user feel stupid
printIt();
