'use strict';

var foo = function() {
  var local1 = 4;
  console.log("defined: " + local1);

  // you can redefine a variable that is in scope!
  // not just reassignment
  var local1 = 7;
  console.log("redefined: " + local1);
}

foo();
