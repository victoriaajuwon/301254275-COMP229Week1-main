//import statement for the libs.js module
import {halfOf, multiply} from './lib.js';
console.log(halfOf(84));
console.log(multiply (21,2));

//import statement for the doSomething.js module
import doSomething from './doSomething.js';
doSomething();

//import statement for the validator.js module
import {flag, touch} from './validator.js';
console.log(flag);
touch();
console.log(flag);