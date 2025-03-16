//strings are used to store texts
let xl = "mac";
let hh = "2025";

//length - length is used to count things
//by default JS count begins from 0, but using the length, the count starts from 1
let text = "Today is Thursday";
console.log(text.length); //17 counts from 1, spaces included

text.length > 0 && console.log("Hi text");

//methods are actions that can be performed on a datatype

//slice method - extracts a part of a string. It takes 2 arguments - the starting position to be sliced and the ending position to stop the slice. If you ommit the ending position, It will slice from the starting point down to the end of the string
console.log(text.slice(6, 8)); //is
// methods must be called with a bracket ()
let fruits = "apple, banana, pineapple";
console.log(fruits.slice(7, 13)); //banana

//indexOf method - return the index position of the first occurence of a text in a string
let findText = "please find me a pen and find my book";
console.log(findText.indexOf("find")); //find occurs at index 7
//lastIndexOf finds the occurence of a text in a string
console.log(findText.lastIndexOf("find"));

//Excercise
//output a list of strings sentences and check its length
//slice your string and extract the third syllable word
//find indexOf the fourth character

let names = "Ayo Samuel Gabriel Mufasa";
console.log(names.slice(4, 10));
console.log(names.indexOf("Gabriel"));

// to upperCase and lowercase method
text = "I have a shoe";
console.log(text.toUpperCase()); //all uppercased
console.log(text.toLowerCase()); // all lowercased

//replace method - this replaces a text with another in a string. It takes 2 arguments - the word to be replaced, and the new word to be added.
let newText = "i have a book";
console.log(newText.replace("have", "own")); //have has been replaced with the word "own" in this sentence.

//the replace method only replaces the first match it sees, it is also case sensitive
newText = "i own a laptop and own a book ";
console.log(newText.replace("own", "have")); //own appears twice, using the replace method will only replace "own" with "have" the first time it appears.

//replaceAll - replaces all occurences of a text in a string
let food = "I love rice. Rice is my best food, Rice is delicious";
console.log(food.replaceAll("Rice", "beans")); // 'beans' replaces all the occurences of "Rice". If you notice "rice" was not replaced, and that is because the casing is not a match with "Rice"

//concatenation - join 2 or more things together
let text2 = "The shoe is fine";
console.log(text2.concat(".", " ", newText));
//using plus method to join

text2 = newText + "." + "" + food;
console.log(text2);
