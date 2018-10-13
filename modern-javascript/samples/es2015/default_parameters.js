'use strict';

// what if we want to evolve this method in a few weeks?
const greet1 = function(name) {
  console.log(`Hello, ${name}!`);
}
greet1('Jane');

// const greet2 = function(name, greeting = 'Hello') {
  // console.log(`${greeting}, ${name}!`);
// }
//
// greet2('Jane');
// greet2('Jane', 'Hi');
