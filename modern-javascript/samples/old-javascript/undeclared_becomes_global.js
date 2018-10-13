var foo = function() {
  var local1 = 4;

  // if you don't declare with var, the variable becomes global
  local2 = 5;

  console.log(local1);
  console.log("locally accessed: " + local2);
}

foo();
console.log(local1);  // ERROR
console.log("globally accessed: " + local2);
