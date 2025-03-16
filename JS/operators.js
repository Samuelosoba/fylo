//operators are used to perform actions
//we have different types of operators

//assignment operator
let dd = 4; //here "=" assigns the value of 4 to variable dd

//arithmetic operators
let ee = 5;
console.log(dd + ee);
console.log(ee - dd);
console.log(dd * ee);
console.log(dd / ee);
console.log(dd ** ee); //exponential
console.log(dd % ee); // modulus or remainder of

//increment and decrement - increase or decrease a value by 1
let qq = 3;
console.log(qq++);
console.log(qq); //increases by an addition of 1

let oo = 5;
console.log(oo--);
console.log(oo); //decrement by 1

//comparison operators - used to determine differences/similarites between values
let rrr = 30;

//equal to == here, this checks for same values amongst variable. it is not strict
console.log(dd == rrr); //false
console.log(dd == 4); //true
console.log(rrr == 30); //true
console.log(rrr == "30"); //true

//strictly equal to === this checks for same value and datatype
console.log(rrr === "30"); //false
console.log(rrr === 30); //true

// not equal to !=
console.log(rrr != 30); //false
console.log(rrr != "30"); //false

//strictly not equal to !== same value and datatype
console.log(rrr !== 30); //false
console.log(rrr !== "30"); //true

//greater than >
console.log(30 > rrr); //false

// less than
console.log(30 < rrr); //false

//greater than or equal to >=
console.log(30 >= rrr); //true

//less than or equal to <=
console.log(30 <= rrr); //true

//logical operators - we have 3 types
//logic or - ||
//logical and - &&
//logical not - !

//logical or - this evaluates your operands from left to right, it will try to convert your js expression into a boolean value, and then this will give a truthy or falsy value
//logical or will return the last value in the operand if all values are false
//logical or will give you the first truthy value it finds in your operands
let fp = 10;
let gp = 15;
console.log(fp || gp); //10 beacause 10 is the first truthy value in the operand
console.log(0 || 1); // 1 cos 1 is true and 0 is false
console.log(undefined || null); // null cos undefined and null are falsy in nature and so the logical or will simply return the last value in the operand which is null

console.log(undefined || null || 1 || 0 || 2); // 1 cos its the first truthy value

//logical and - && this returns true if both operands are true
// if there is a falsy value, it will return the first falsy operand
//if all operands are true, it will return the last operand

console.log(fp && gp); //15 because both are true and so logical && will return the last value
console.log(0 && 40); //0 because it is falsy, logical && will return the first falsy value it sees
console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(undefined && null); //undefined
console.log(3 && 0 && 4); //0
console.log(null || (2 && 3) || 4); //here, the bracket takes priority and the evaluation (2 && 3) will return as the truthy value. Then we evaluate null || 3 || 4, since this is logical OR, it will return the first thruthy value in the operand which is 3, so 3 is the answer

//logical not ! - the operator seeks to convert thruthy to falsy and vice versa
console.log(!true); //false
console.log(!false); //false
console.log(!40); //false

let pp = 2;
console.log(pp > 2 && pp < 2); //false

let pen = true;
let biro = false;
let eraser = 10;

console.log(eraser > 5 || eraser < 5); //true
console.log(!pen); //false
console.log(biro || biro); //false
console.log(pen || biro); //true
