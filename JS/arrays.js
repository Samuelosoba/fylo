//arrays can be used to hold multiple values at once
//if we to list out items in class, we would do this

const item1 = "Ac";
const item2 = "fan";
const item3 = "chairs";

//the above is not ideal way to list out things, hence array. We can simply use array to list the data under a single variable name
const classItems = ["Ac", "fan", "chairs", "desks"];
console.log(classItems);
//arrays are denoted with the square brackets

//how to create an array
//using the square bracket
const numms = [10, 20, 30, 40];

//initializing an empty array and then inserting items via the index position
const randomStuff = [];
randomStuff[0] = "brush";
randomStuff[1] = "pen";
randomStuff[2] = "watch";
console.log(randomStuff);

//using the new keyword to create a new array instance
const myColors = new Array("red", "blue", "green");
console.log(myColors);

//arrays are zero indexed - to access items in an array we do so via their index position
console.log(myColors[1]); //blue

// modifying an array value
myColors[2] = "yellow"; //update the value of green to yellow
console.log(myColors);

//converting an array to string
console.log(myColors.toString());

//add new items to an array - 2 ways
//push method - adds new items from the last position in the array
myColors.push("purple");
console.log(myColors); //adds purple to the last item in the array
//unshift method - adds a new item from the first position in the array
myColors.unshift("teal");
console.log(myColors); //teal gets added to myColors as the first item in the array

//removing items from an array
//pop method - removes the last item in the array.
myColors.pop(); //does not take any argument
console.log(myColors);
//shift method - removes the first item in an array
myColors.shift(); //takes no argument
console.log(myColors);

//slice method - returns selected items in an array as a new array. It takes 2 argument - position to begin slice and the end position.
const meals = ["rice", "spag", "eba", "salad", "snack"];
console.log(meals.slice(2, 3));

//merging arrays - concatenate or use the spread operator
const concatArray = meals.concat(myColors); //joining meals and myClors as a single array
console.log(concatArray);
//spread operator unpacks items from an array as individual items. It is identified by a triple dot "..."
const spreadArray = [...meals, ...myColors];
console.log(spreadArray);

//indexOf - returns the first occurence of an item in an array. It will return -1 if the item cannot be found
console.log(meals.indexOf("sss")); // -1 cos ss does not exist in meals array
console.log(meals.indexOf("spag")); // 1 cos spag can be found at index 1 in meals array

//includes method - returns boolean if an item exists
console.log(meals.includes("salad")); //true
console.log(meals.includes("sss")); //false

//creating an array from a string value
let textWord = "javascript";
console.log(textWord);
//using Array.from
console.log(Array.from(textWord));
//using the split method
console.log(textWord.split(""));

//isArray method - returns boolean and it checks if a data is an array of not
console.log(Array.isArray(textWord));
console.log(Array.isArray(meals));

//sort method - arranges items in an array in a specific order
const fruitss = ["Banana", "Apple", "Orsnge", "Mango"];
console.log(fruitss.sort()); //sort will convert the items to string and then sort it alphabetically
const prices = [40, 100, 1, 5, 25, 10];
console.log(prices.sort()); //this sorts the number in order of 1,2,3 leading to unexpected results

//proper numeric sorting
const ascending = prices.sort((a, b) => a - b);
console.log(ascending); //this uses a compare function to sort the items.the a-b simply states that it should be negative if a should come before b, and positive if b should come before a
const decending = prices.sort((a, b) => b - a);
console.log(decending);
