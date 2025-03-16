// a variable is used to store information so that it can be used or manipulated later on.

// how to define variable names
// using an underscore (_)
// using a dollar sign ($)
// using alphabets - A_Z or a-z

// you cannot begin a variable name with a number - numbers are reserved keywords in JS

// JS is case sensitive
lastname = "Tope"; //lowercase
LASTNAME = "Susan"; //uppercase
LastName = "Ayo"; //pascalcased
lastName = "Ebube"; //camelcased-popular

// JS name declaration
myname = "David"; //automatic name declaration. It is not advised
//using var, let and const keyword
var samuel = 1;
let book = "Harry Potter";
const phone = "Iphone";

// when to use var, let, or const
// var- outdated, use if you want to support older browser
// let- use if you know the value of the variable will change at some point in the future
// const- use if the value should not be changed

console.log("hello javascript");

//redeclaring and reassigning variables
// var lets you redeclare and reassign a variable
var car = "toyota";
console.log(car);
var car = "lexus";
console.log(car);

//you cannot redeclare a varaiable name that begins with let, but you can reassign its values
//let book = "lord of the ring"; - we cannot use 'let book' again because we have declared let book above, but we can reassign the value of book to another
book = "lord of the ring";
console.log(book);

//for const, you cannot redeclare nor reassign with a variable that starts with a const
// const phone = "samsung"; - cannot redeclare
//phone- "samsung"- cannot reassign

//global scope and block scope variables
//global scope variables can be accessed from anywhere, while block scope are like private spaces and variables declared there are bound to that space

//global scope
let a = 40;
console.log(a);

//block scope - denoted with curly bracket
{
  let a = 30;
  console.log(a);
}

//the block does not work on var
var x = 20;
console.log(x);
{
  var x = 50;
  console.log(x);
}
console.log(x);
