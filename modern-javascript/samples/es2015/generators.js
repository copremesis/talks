'use strict';

function* values() {
  yield* ['a', 'b', 'c'];
  yield 'f';
  // but, if you were hoping to use the spread operator...nope
  // const arr = [1, 2, 3];
  // yield* ...arr;  // ERROR
}

const vals = values();
console.log(vals.next());
console.log(vals.next());
console.log(vals.next());
console.log(vals.next());
console.log(vals.next());

for(const val of values()){ 
  console.log(val);
}
