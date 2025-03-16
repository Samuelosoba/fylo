//loops are used to execute an action a number of times
const clubs = ["Madrid", "Chelsea", "Barcelona"];
//If one were to list out the club names, we would do so via the index position
clubs[0]; //madrid
clubs[1]; //chelsea
//the above is not an ideal way to list out things expecially if the items are much. Loops will be much better

//types of loops - we have different types of loops, they are designed to perform the same tasks, but some can be better suited for different scenarios

// for loop
//this iterates over elements in an array for a fixed number of times. It takes 3 arguments
//the initialization, the condition, and the increment
for (let i = 0; i < clubs.length; i++) {
  console.log(clubs[i]);
}

//using the for loop in the above, we first intialise the loop by stating where we want to start in teh array, which is at index 0.
//then we specify the condition for the loop to run - 0 is less than the length of the clubs array which is 3. Since the statement is true, it will perform the loop using i++. Note: i is just a variable name, can be anything

//count numbers from 1 to 9
for (let i = 1; i < 10; i++) {
  console.log(i);
}

//for of loop - also iterates over arrays, objects, strings
const testScores = [4, 5, 6, 7];
for (const score of testScores) {
  console.log(score + 10);
}

const words = "javascript";
for (let t of words) {
  console.log(t);
}

//double the numbers in an array using the for of loop
const doubleNums = (numbers) => {
  let result = [];
  for (let num of numbers) {
    result.push(num * 2);
  }
  return result;
};
console.log(doubleNums([2, 3, 4, 5]));

//for in loop - iterates over objects
const myObjects = {
  name: "John",
  age: 20,
};

for (const items in myObjects) {
  console.log(myObjects[items]);
}

const newObjs = {
  a: 4,
  b: 8,
  c: 12,
};
for (const num in newObjs) {
  console.log(newObjs[num] * 2);
}

//using the for in loop, we create a function that adds each numbers in our array by an addition of 4 and returns them in an array, also we return the first items

const numObject = (num) => {
  let result = [];
  for (const rr in num) {
    result.push(num[rr] + 4);
  }
  return result.slice(0, 2);
};

console.log(
  numObject({
    a: 4,
    b: 6,
    c: 8,
  })
);

//while loop
//this will execute a block of code as long as the specified condition is true
//while loop checks the condition before executing the code
//if the condition is false initially, the code block never runs

let myCount = 0;
while (myCount < 5) {
  console.log(myCount);
  myCount++;
}
// as long as myCount value is less than 5, which is the condition specified, the code will run.
//while loops are useful when you need to continue an action until a specific condition is met, rather than or a defined number of items

let eee = [1, 2, 3, 4, 5];
let ppp = 0;
while (ppp < eee.length) {
  console.log(eee[ppp]);
  ppp++;
}

//do while loop
//the do while loop will always execute at least once, and then will check the condition specified for the loop to run. The condition is usually checked at the end of the first loop.
//we use the do while when we need to make sure the code runs at least once. The difference btw the while loop and the do while loop is that the do while loop gurantees at one execution of the code regardless if the condition is false.

let vv = 10;
do {
  console.log(vv);
} while (vv < 5);
//output will be 10 (ran once) even though the condition is false - 10 is not less than 5
let zz = 10;
while (zz < 5) {
  console.log(zz); //using the while loop, the output will be nothing because then will not run as a result of the condition being false. 10 is not less than 5
}


