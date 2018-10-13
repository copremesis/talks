'use strict';

const age = 0;
for(const name of ['Bob', 'Sam', 'Maggy']) {
  // instead of...
  console.log({name: name, age: age});
  // use...
  // console.log({name, age});
}
