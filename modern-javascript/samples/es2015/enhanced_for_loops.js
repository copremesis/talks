'use strict';

const names = ['Tom', 'Jerry', 'Tyke'];

// it's tedious to use old-fashioned for loops
for(let i = 0; i < names.length; i++) {
  console.log((i + 1) + '--' + names[i]);
}

// if we don't need the index
// for(const name of names) {
  // console.log(name);
// }

// entries gives you access to the index
// for(const entry of names.entries()) {
  // console.log(`${entry[0] + 1}--${entry[1]}`);
// }
  
// mix entries with destructuring
// for(const [i, name] of names.entries()) {
  // console.log(`${i + 1}--${name}`);
// }


