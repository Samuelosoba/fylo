// js has 8 data types to hold values

// js datatypes are of two types - primitive and non-primitive datatype
// primitive datatype can only hold a single value
//non-primitive can hold multiple values

//primitives - strings, numbers, boolean, null, undefined, symbol, bigInt
//non-primitives - objects

// the typeof operator - this is used to check the datatype of a javascript variable
const className = "full-stack";
console.log(typeof className); //this tells us what datatype className is

//strings - used to output textual data and are denoted by "". either single or double or backticks
let color = "yellow";
color = "blue";
color = `red`;
let cc = "200"; //here 200 is treated as textual data and not number
console.log(typeof cc); //datatype of string and not number

//number - are stored as decimal numbers - floating point
//number can be written with or without decimals
//floating point numbers - 3.14, -1.2
//integers - 3, 5, 10, ...
const naira = 3000;
const balance = 10.4;

//boolean- can only have two values - either true or false. They are used for perfoming conditional logics

let ab = true;
let cd = false;

//undefined - a variable that has been declared without a value
let today; //undefined because we have not assigned a variable to it
console.log(typeof today);
//you cannot declare a variable as undefined using const keyword
let kk = ""; //this is not undefined --kk has a value

//null - represent no value or nothing
let op = null;
console.log(typeof op);

//objects - hold more than one value, are denoted with curly braces and come in key-value pairs
const human = {
  name: "Tope",
  age: 20,
  location: "Lagos",
  job: "web developer",
};
console.log(human);

//bigINT is a type of number that can represent a very large set that regular JS number database cannot hold

let value1 = 56789054387538495384768968568856n;

//symbols - are used to represent unique identifiers in variables
let apc = Symbol("scam");
let pdp = Symbol("scam");

console.log(apc === pdp); //false cos symbols enables js to treat the values as unique therefore apc and pdp are not the same
