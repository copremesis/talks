//it is not intuitive that this function takes more than one argument.
const max = function() { 

  //arguments is not an array, but we try hard to use it like that
  console.log(arguments instanceof Array);
  
  // we really can't use all the powerful methods of Array.
  // so programmers write code to cast arguments into an array before using it.
  // it's error prone, too much work, and hard maintain                                               
  
  var large = arguments[0];
  for(var i = 0; i < arguments.length; i++) {
    if(large < arguments[i]) large = arguments[i];
  }                                             
  return large;
}

console.log(max(1, 2));
console.log(max(4, 2));
console.log(max(1, 7, 3));
console.log(max(3));
