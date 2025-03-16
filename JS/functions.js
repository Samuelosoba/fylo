//functions are designed to perform a particular task
//it is a reuseable piece of code that performs a logic, returning different results based on the values supplied
//it is executed when called upon

//how to declare a function
//function declaration
function myName() {
  console.log("Hi Ebube");
}
//arrow function
const arrowFunction = () => {
  console.log("This is an arrow function");
};

//invoking a function - simply means activating the function to run
myName();
arrowFunction();

//the return keyword - used only in functions. they return the final computation of your code logic. Nothing should be written after the return statement as Javascript will not recognize it.

function addMe() {
  return 3 + 4;
}
console.log(addMe()); //function addMe returns 7 as the value

//parameters and arguments
//parameters are like placeholders that recieve variables. They are used when defining a function.
//arguments are the actual values the function recieves from each parameter

function sumUp(a, b, c) {
  return a + b + c;
}
//the function sumUp accepts 3 parameters - a,b,c.

console.log(sumUp(3, 4, 5)); //supplying the arguments - 3,4,5 are the actual values passed to the sumUp function. They slot in for a, b, c respectively.
console.log(sumUp(5, 7, 15)); //sumUp function again invoked but with a different argument

//using parameters can make your code dynamic because the same function run giving us different results based on the arguments provided.

//calc food total
const calcFood = (food, tip) => {
  return food + tip;
};
console.log(calcFood(6000, 500)); //6500 - total amount spent on meal

//write a splitBill function that splits the bill of our calcFood
//if just a person was the only one to eat the meal, the bill should return the total
//but if there were more than one person who ate the meal, the splitbill should divided the sum by the number of persons who ate meal

const splitBill = (foodAmount, numberOfPerson) => {
  if (numberOfPerson === 1) {
    return foodAmount;
  } else if (numberOfPerson > 1) {
    const bill = foodAmount / numberOfPerson;
    return bill;
  }
};
console.log(splitBill(calcFood(4000, 100), 5));

//write a function that takes a parameter. The functions job is to return back words supplied in an array and all uppercased.

const randomWord = (words) => {
  let result = [];
  result.push(words[0].toUpperCase());
  result.push(words[1].toUpperCase());
  result.push(words[2].toUpperCase());
  return result;
};
console.log(randomWord(["today", "tomorrow", "nextTomorrow"]));

//create an array named "todos". This array should be an array of objects whose properties should have the keys - title, dueDate, and id. Supply the values
//Write a function that lets you add a new item to your todos array. For the dueDate, use the getTime method from Date as the value

const todos = [
  {
    title: "Today is wednesday",
    dueDate: "19/02/24",
    id: 2,
  },
  {
    title: "Tommorrow is Thursday",
    dueDate: "20/02/24",
    id: 6,
  },
  {
    title: "Next tommorow is wednesday",
    dueDate: "21/02/24",
    id: 4,
  },
];

function newToDo(a, b, c) {
  return todos.push({
    title: a,
    dueDate: b,
    id: c,
  });
}

console.log(newToDo("It is fine", new Date().getTime(), 5));
console.log(todos);

//write a function cartQty. It takes a parameter cart
//the cart parameter will be an array of two objects.
//the objects will have the keys - price and qty
//the values of the objects should be of datatype numbers.
//the function cartQty should be able to multiply the values of each property in the object and then sum up the total of the 2 object values to give you a result

function cartQty(cart) {
  let total;
  const obj1 = cart[0].price * cart[0].qty;
  const obj2 = cart[1].price * cart[1].qty;
  total = obj1 + obj2;
  console.log(total);

  return total;
}
cartQty([
  {
    price: 300,
    qty: 1,
  },
  {
    price: 200,
    qty: 2,
  },
]);

// export default calcFood;  //using default statement to export file only permits a single file export

export { calcFood, sumUp }; //exporting multiple files have to be encased in curly braces and without the default statement
