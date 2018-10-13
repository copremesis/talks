'use strict';

// The rest parameter syntax allows us to represent an
// indefinite number of arguments as an Array object.
//
// rest can appear at most once in a parameter list
// rest has to be the last parameter, if present
//
// now dynamic arguments are inituive and self-documenting
const max = function(...numbers) {

  // rest parameter is an Array object
  console.log(numbers instanceof Array);
  
  let large = numbers[0];
  for(let i = 0; i < numbers.length; i++) {
    if(large < numbers[i]) large = numbers[i];
  }                                             
  return large;
  
  // the above works and we can do just that...OR                          
  // you may use Array functions
  return numbers.reduce((large, e) => large < e ? e : large, numbers[0]);
}                   
                                    
// rest is empty if no value passed
console.log(max());
console.log(max(1, 2));
console.log(max(4, 2));
console.log(max(1, 7, 3));
console.log(max(3));
