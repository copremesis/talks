'use strict';

const greet = function(name1, name2) {
  console.log(`Hello, ${name1} and ${name2}!`);
}
                          
const names = ['Jack', 'Jill'];
greet(names[0], names[1]);

// does not need rest on the receiving end
greet(...names); 
