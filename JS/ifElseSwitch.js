//if and else
//if statement evaluates a condition inside a bracket
//use if statement if the code to be executed is true, while else if the same code to be executed is false
//addtionally, we have the elseIf, used to specify a new condition to be tested if the first condition evalautes to false

//structure of the ifElse
// if(condition to be tested) {code to execute if condition is true}
// else{code to be executed if condition is false}
const checkAmount = 1000;
if (checkAmount > 600) {
  console.log("I have more");
} else {
  console.log("I have less");
}

//else if
if (checkAmount >= 1200) {
  console.log("a");
} else if (checkAmount <= 500) {
  console.log("b");
} else if (checkAmount > 900 && checkAmount <= 1100) {
  console.log("c");
} else {
  console.log("d");
}

//another way to write conditions is using the ternary operator.
//the ternary operator evaluates your condition and if true, it assigns the value written after a question mark, otherwise, if false, it assigns the value after the colon
const checkSum = checkAmount >= 700 ? "yes" : "no";
console.log(checkSum);

//test for multiple conditions using ternary operator
checkAmount < 600
  ? console.log("a")
  : checkAmount > 800
  ? console.log("b")
  : checkAmount === 900
  ? console.log("c")
  : console.log("d");

//prompt and alert
//prompt is used to recieve input from the browser
//alert is used to display informatin to the user
// let jjj = prompt("enter username");
//let ppp = alert("welcome user")

//write a code thats a question using the prompt method
//the question should say "who is there?"
//if the question reply is "Dami", it should prompt for a password
//if the password is "javascript", then alert "welcome user"
//if the password is not "javascript", alert "wrong password"
//if the question reply is not "Dami", alert "I dont know you"
//if there is no question, alert "cancelled"

// let name = prompt("who is there");

// if (name === null || name === "") {
//   alert("cancelled");
// } else if (name === "Dami") {
//   let passwords = prompt("Enter password");
//   if (passwords === "javascript") {
//     alert("Welcome user");
//   } else {
//     alert("Wrong password");
//   }
// } else {
//   alert("I dont know you");
// }

// name === ""
//   ? alert("cancelled")
//   : name === "Dami"
//   ? (password = prompt("enter password"))
//   : alert("i dont know you");
// password === "javascript" ? alert("welcome user") : alert("wrong password");

//switch statement - this performs series of actions based on different conditions
// the values are compared case by case
// if there is a match to the case, the associated block of code to that case is executed
// if there is no match, the default block of code is executed

//switch syntax

// switch (expression) {
//   case value1:
//     //code
//     break;
//   case value2:
//     //code
//     break;
//   default:
//     //code
//     break;
// }

//switch uses strict comparison (===) when analysing
//break statement is needed to stop execution from going to the next case if it has found a match. Without a break, code will continue executing into the next case
//Cases must be unique
//default case runs if no other cases match

let uu = 4;
switch (uu) {
  case 1:
    uu = "four";
    break;
  case 2:
    uu = "three";
    break;
  case 3:
    uu = 5;
    break;
  case 4:
    uu = "Hello class";
    break;
  default:
    uu = 6;
    break;
}
console.log(`the value of uu is ${uu}`); //template strings or literals

const getDay = new Date().getDay();
switch (getDay) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Friday");
    break;
  case 2:
    console.log("Thursday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Monday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("No day found");
    break;
}

// const operator = prompt("Enter either +, -, /, or *");
// let ourResult;
// const num1 = parseFloat(prompt("Enter first number"));
// const num2 = parseFloat(prompt("Enter second number"));

switch (operator) {
  case "+":
    ourResult = num1 + num2;
    alert(`${num1} + ${num2} = ${ourResult}`);
    break;
  case "-":
    ourResult = num1 - num2;
    alert(`${num1} - ${num2} = ${ourResult}`);
    break;
  case "/":
    ourResult = num1 / num2;
    alert(`${num1} / ${num2} = ${ourResult}`);
    break;
  case "*":
    ourResult = num1 * num2;
    alert(`${num1} * ${num2} = ${ourResult}`);
    break;
  default:
    alert("invalid operator");
}
