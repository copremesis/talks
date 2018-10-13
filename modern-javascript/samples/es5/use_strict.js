// use strict prevents undeclared variables
// it is a literal declaration and so it is backwards compatible
'use strict';

var foo = function() {
  var local1 = 4;
  local2 = 5; // ERROR: undeclared
  console.log(local1);
}

foo();              
