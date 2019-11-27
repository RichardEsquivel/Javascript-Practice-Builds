//single line comments

//This is a lot of utilizations of console.log
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log(123);
// console.log(true);

// var greeting = 'Hello';
// console.log(greeting);
// console.log([1, 2, 3, 4]);
// console.log({ a: 1, b: 2 });
// console.table({ 1: 1, b: 2 });


// console.error('This is a cool error!');
// console.clear();
// console.warn('This is a BIG WARNING!');
// console.time('Hello');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.log("WHAT A COOL LOG!", 'Hello World');
// console.timeEnd('Hello');
/*
multi line
comments
*/


//var, let, const : 3 keywords var has been around since the beginning, let and const es2015 or es6 update to language going to stay away from var, let and const have big advantage regarding block level scope

//VAR ----
// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name); //you can reassign variables with var or let

// //Init var initialize a variable

// var greeting; 
// /* often do this with a conditional if something is true 
// greeting equals this and if something else is true greeting equals this*/
// console.log(greeting);
// greeting = 'Hello!';
// console.log(greeting);

// //variables can be named with letters, numbers, _, $ but don't use the money sign unless using Jquery, they cannot start with a number

// // var _name  var $hello  var hello325

// //Multi word vars camel case is the most readable
// var firstName= 'John'; //camel case
// var first_name= 'John'; //Underscore
// var Firstname= 'John'; // Pascal Case, recommended when you create a constructor function  or with ES6 classes
//We will follow the convention of camel case 

//let works similar to var identical on the global scope with advantages on block level scoping

// LET ----
// let name;
// let name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

//CONST ----
// const name = 'John Doe';
// console.log(name);

//Cannot reassign const
// name = 'Steve Smith';
// console.log(name);

//We have to assign a value, this will through an error
// const greeting;

//We can change what is in the object of person we just can't reassign the person variable!
// const person = {
// 	name: 'John',
// 	age: 30
// }
// //we can mutate properties with a defined const object, even though we changed the data within that object it is still set to that object
// person.name = 'Sara';
// person.age = 32;
// console.log(person);

// //Array mutate

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// // numbers = [1, 2, 3] can reassign the variable
// console.log(numbers);

//Use const unless we plan on the value changing unless need to initialize it or using it in an iterator or loop, it lets anyone know this value should not be reassigned as a new primitive value. Makes it more robust secure and readable.

//2 Data Types, Primitive Data types stored directly in the variable accesses, stored on the stack
//Reference Data Types, Accessed by reference, Objects that are stored on the heap, A pointer to a location in memory, stored on the heap related to dynamically allocated memory

//Primitives
/* String letters numbers and symbols
Number  Integers decimals and floats are considered all numbers in Javascript. Unlike other languages
Boolean   True, False
null   Intentionally empty value
undefined   all variables are undefined by default, this value has not been assigned intentially to null as null is
Symbols (ES6)

Reference Types

Arrays
Object Literals
Functions
Dates
Object Wrappers

Javascript is object oriented
Types are associated with values not variables
The same variable can hold multiple types
We do not need to specify types
Most other languages are statically typed( Java, C#, C++)
There are subsets of JS and addons to allow static typing (Typescript, Flow) this would in other languages make it so that you have to declare what will be held in that variable when declaring

*/
//PRIMITIVE

// //String
// const name = 'John Doe';
// console.log(typeof name)
// //Number
// const age = 45;

// console.log(typeof age);
// //Boolean
// const hasKids = true;
// console.log(typeof hasKids);
// //Null
// const car = null;
// console.log(typeof car); // this is kind of a bug in the javascript world. null is not an object but is a primitive type this has to do with the implementation of jS originally
// //Undefined
// let test;
// console.log(typeof test);
// //Symbol
// const sym = Symbol();

// console.log(typeof sym);

// //REFERENCE TYPES, will all come back as objects
// //array
// const hobbies = ['movies', 'music'];
// console.log(typeof hobbies)
// //Object literal
// const address = {
// 	city: 'Boston',
// 	state: 'MA'
// }
// console.log(typeof address);
// //Date
// const today = new Date();
// console.log(today);

// console.log(typeof today);

//WITH primitive you are actually accessing the data from the assignment with reference you are referencing memory

// ---- TYPE CONVERSIONS
// taking input from a form and putting it into a variable you need to parse it into a number or other conversions

let val;

//Number to string
val = 555;
val = String(4 + 4);
//Bool to string
val = String(true);
//Date to string
val = String(new Date());
//Array to string
val = String([1, 2, 3, 4]);
// to String()



//Output
console.log(val);
console.log(typeof val);
console.log(val.length); //length is a string property method

// val = String(val);//string converts to a string


