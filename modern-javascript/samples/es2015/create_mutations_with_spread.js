'use strict';
         
const sam = Object.freeze({ name: 'Sam', age: 2, hair: "blonde", height: 20 });

// now that we are creating unmutable objects using const and freeze
// how do create updated versions of our objects?

// this is no fun
// imagine if there were 20 properties and we only wanted to change 2
console.log({ name: sam.name, age: 20, hair: sam.hair, height: 75 })

// how about this?
// not only is it easier, it reads beautifully
console.log({ ...sam, age: 20, height: 75})
