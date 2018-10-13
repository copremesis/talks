'use strict';

const greet = function(name1, name2, ...others) {
  console.log(`Hello ${name1}, ${name2}, ${others.join(', ')} `);
}
                          
const names = ['Jack', 'Jill'];
const more = ['Troy', 'Jane'];

greet(...names);
// greet(...names, ...more);
// greet(...names, 'Bob', ...more);
// greet(...[...names, 'Bob', ...more]);
