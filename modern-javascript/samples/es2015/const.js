'use strict';

// use const as much as possible
const value = 4;
const printIt = () => console.log("The value is " + value);
          
value = 4;  // ERROR: no reassignment
printIt();
