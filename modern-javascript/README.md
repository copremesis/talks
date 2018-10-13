Modern JavaScript
=================
``` 
___  ___          _
|  \/  |         | |
| .  . | ___   __| | ___ _ __ _ __
| |\/| |/ _ \ / _` |/ _ \ '__| '_ \
| |  | | (_) | (_| |  __/ |  | | | |
\_|__|_/\___/ \__,_|\___|_|__|_| |_|    _       _
  |_  |                /  ___|         (_)     | |
    | | __ ___   ____ _\ `--.  ___ _ __ _ _ __ | |_
    | |/ _` \ \ / / _` |`--. \/ __| '__| | '_ \| __|
/\__/ / (_| |\ V / (_| /\__/ / (__| |  | | |_) | |_
\____/ \__,_| \_/ \__,_\____/ \___|_|  |_| .__/ \__|
                                         | |
                                         |_|
```
### Or...How I Learned to Stop Worrying and Love JavaScript

Adapted from NFJS talks by Venkat Subramaniam: http://www.agiledeveloper.com


With old JavaScript...
----------------------
- [undeclared becomes global](samples/old-javascript/undeclared_becomes_global.js)
- [var permits redefinition](samples/old-javascript/var_permits_redefinition.js)
- [var lacks block scope](samples/old-javascript/var_lacks_block_scope.js)
- [function arguments are a mess](samples/old-javascript/function_arguments_are_a_mess.js)


In modern JavaScript...
-----------------------
- ['use strict' to prevent undeclared](samples/es5/use_strict.js)
- [use let to prevent redefinition, eliminate hoisting and honor block scope](samples/es2015/let.js)
- [but know the limits of let](samples/es2015/limits_of_let.js)
- [use const to prevent reassignment](samples/es2015/const.js)
- [but know the limits of const](samples/es2015/limits_of_const.js)
- [use freeze to create unmutable objects, but know the limits of freeze](samples/es5/freeze.js)
- [use the rest operator to handle dynamic arguments](samples/es2015/rest.js)


But wait, there's more!
-----------------------
- [use the spread operator to pass arguments](samples/es2015/spread.js)
  - [but not just when using rest on the other side](samples/es2015/spread_without_rest.js)
  - [also, when combining arrays with discrete arguments](samples/es2015/combining_with_spread.js)
  - [and to create mutations of objects](samples/es2015/create_mutations_with_spread.js)
- [use template literals to build strings](samples/es2015/template_literals.js)
- [use default parameters in your functions](samples/es2015/default_parameters.js)
- [use destructuring to unpack arrays and objects](samples/es2015/destructuring.js)
- [use an enhanced for loop](samples/es2015/enhanced_for_loops.js)
- [use generators to create iterators](samples/es2015/generators.js)
- [use "fat arrow" functions for one-liner functions](samples/es2015/arrow_functions.js)
- [use object literals to make code nicer](samples/es2015/object_literals.js)


Conclusion
----------
All of these are features of JavaScript, supported by all modern browsers and not requiring any 3rd-party libraries.
It just makes sense to use them to help clean up your code, making it more secure, bug-free, and fun to write.

Oh, and [read here](https://gomakethings.com/why-i-dont-use-let-const-or-fat-arrow-functions-and-you-shouldnt-either/)
for another perspective on the use of let, const and fat arrow functions!
