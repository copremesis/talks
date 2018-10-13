'use strict';

const greeting = 'Hello';
const name = 'Joe';
const price = 12.12;

// gross!
console.log(greeting + ", " + name + ", the price is $" + price + ".");

// much nicer with template literals
// - use back-ticks instead of quotes
// - use ${var}
console.log(`${greeting}, ${name}, the price is $${price}.`);
