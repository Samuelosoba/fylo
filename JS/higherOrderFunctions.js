// import { sumUp, calcFood } from "./functions"; // destructured data cos we exported multiple files
//import sumUp from "./functions.js" //use this only for default statement

// console.log(sumUp(4, 5, 8)); //18

//functions can be assigned to a variable and can be passed to other functions as parameters and be returned as a value
//That makes it a higher order function - a function that accepts a function as a parameter and returns a value
let plusFive = (num) => {
  return num + 5;
};
console.log(plusFive(8));
//we can assign plusFive function to a variable
let abcd = plusFive; //abcd inherits plusFive and can be invoked too
console.log(abcd(10));

function callMe() {
  console.log("call me");
}
function higherCallMe(cc) {
  cc();
}
higherCallMe(callMe);
//3 types of higher order function
//the map method - this takes an array and applies a callback on each value in the array. It does not alter the original array - it is

const arr = [2, 3, 4, 6, 8];
const newArr = arr.map((num) => {
  return num * 2;
});

//you can omit the curly braces and just return
// console.log(newArr);
// const newArrr = arr.map((num)=>num*2;)
// console.log(newArrr);

function jj(num) {
  return num + 6;
}
const newArrB = arr.map(jj);
console.log(newArrB);

const actors = [
  { name: "Keanu Reeves", networth: 1000000 },
  { name: "Robert Downey Jr", networth: 1000000 },
  { name: "Dezel Washington", networth: 10000 },
  { name: "Cate Blanchett", networth: 1200000 },
];
//print out the actors name using the map method
const actorsName = actors.map((key) => key.name);
console.log(actorsName);

//filter method - takes an array and retuns a new array with only the values that match your specified condition. This too does not alter the original array.
const filterNums = [1, 2, 3, 4, 5, 6];
//filter nums greater than 4
const numGreaterThan4 = filterNums.filter((num) => num > 4);
console.log(numGreaterThan4);

//filter nums grater than 3 or less than 2
const newNums = filterNums.filter((nums) => nums > 3 || nums < 2);
console.log(newNums);

//filter actors whose networth greater than 1m
const richActors = actors.filter((rich) => rich.networth > 1000000);
console.log(richActors);
//filter the actor whose name is "keanu Reeves"
const keanu = actors.filter((actor) => actor.name === "Keanu Reeves");
console.log(keanu);

//find method  - looks through an array and returns the first item that meets a specific conditon. If no item matches, It returns undefined. It does not alter the original array

let iii = [10, 20, 30, 40];
let found = iii.find((item) => item > 20);
console.log(found); //30 cos its the first match to our condition

//the reduce method
// it loops through an array and returns a single value. It takes a callback with 2 arguments - the accumlator and the current value/element. On each iteration, the acc is the value returned by the last iteration, while the cv is the current element in array.
//additionally, a 3rd argument can be passed which acts as the intial value

const aaaa = [10, 20, 30, 40, 50];
const getTotalNums = aaaa.reduce((acc, cv) => acc + cv);
console.log(getTotalNums);

const sumUpActorsNetworth = actors.reduce((acc, cv) => acc + cv.networth, 0);
console.log(sumUpActorsNetworth);

//forEach method
//iterates over an array and does not return elements back in a new array. It returns the original array
//It's useful when you want to perform an operation without creating an array

//for each and map method can take up to 3 parameters-
//the currentValue - the current element being processed
//the index - optional. the index of the current element
//the array itself- optional. the array forEach/map method was called upon
actors.forEach((actor) => console.log(actor.name)); //here we are returning just the current value in the array - printing out the names

//getting the index
actors.forEach((actor, index) => console.log(`${index} ${actor.name}`)); //here we are also attaching the index position of each items in the array

//returning the array itself
actors.forEach((actor, index, array) =>
  console.log(`Actor ${index} of ${array.length} : ${actor.name}`)
);

actors.forEach((actor) => {
  if (actor.networth > 1000000) {
    console.log(actor.name);
  }
});

//we can destructure our actors array by simply picking out what we want
actors.forEach(({ name, networth }) => {
  if (networth > 1000000) {
    console.log(name);
  }
});



