//numbers represent numerical values
//number types
const integar = 42; //regular integar
const float = 42.5; //floating point number
const scientific = 1e5; //scientific notation
const binary = 0b10101; //binary numbers
const hexadecimal = 0xff; //hexadecimal numbers

//NAN - not a computer - represents not a number and its outputed when javascript cannot compute a value from your expression
console.log(5 - "hello"); //NAN 5 cannot be substracted from hello which is a string

let xo = "10";
let yo = "20";
console.log(xo + yo); //value will be concatenated because the variables are of datatype string
console.log(xo / yo); //js will compute the correct value.
//additions that are not of numerical values will be concatenated, but other arithmetic operators will work on string datatype

//Number methods
const myNum = 123.456;
console.log(myNum.toString()); //converts the value to a string datatype
console.log(myNum.toFixed(2)); // rounds to 2 decimal places -123.46

// is integar method returns boolean - checks if a number is an integar or not
console.log(Number.isInteger(5)); //true
console.log(Number.isInteger(5.5)); //false

//parseFloat - converts a string value and returns the first number
console.log(parseFloat("400 year")); //400
console.log(parseFloat("40 10")); //40
console.log(parseFloat("year 10")); //NaN

//parseInteger - converts a string value and returns the first integar
console.log(parseInt("10.88"));
console.log(parseInt("30 50 80"));
console.log(parseInt("I am Tope 50"));

//number method also converts a string value to a number
let ww = "50";

console.log(typeof Number(ww)); //ww is converted to a number datatype
const strToNum = +"123"; //unary plus operator - first defaults to number before performing arithmetic operation

//Math operations
//Math.round - rounds to nearest integer
console.log(Math.round(4.7)); //5
//Math.ceil - rounds up to the nearest integer
console.log(Math.ceil(4.3)); //5
//Math.floor - rounds a number down to the nearest integer
console.log(Math.floor(4.7)); //4
//Math power
console.log(Math.pow(2, 3)); //2 raised to the power of 3 gives 8
//square root
console.log(Math.sqrt(16)); //4
//Math.min - returns the minimum value
console.log(Math.min(2, 5, 1)); //1
//Math.max- returns the maximum value
console.log(Math.max(2, 5, 1)); //5
//Math.random - returns a random number between 0 (0 is inclusive) and 1 (1 is excluded)
console.log(Math.random()); //returns a random value btw 0 and 1
