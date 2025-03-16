//objects can store a collection of data in one entity, making it non-primitive in nature. They consist of key-value pairs

const school = {
  name: "Techstudio",
  address: "Onipanu",
  students: 16,
};
console.log(school);

//name, address, students are reffered to as the keys, while techstudio, onipanu, 16, are reffered to as the Values. Object values can be of any data type.

//accessing values in an object - 2 ways to do that
//using dot notation - widely used
console.log(school.name); //Techstudio
//using bracket notation
console.log(school["address"]); //onipanu

//modifying an object value
school.students = 20; //value has changed from 16 to 20
console.log(school);

//adding a new property to an object
school.course = "web development";
console.log(school); //a new key "course has been added"

//how to create an object
//using the object literal
const lists = {
  brand: "nike",
};
//using the new keyword to create a new instance of an object prototype
const list2 = new Object({
  shoe: "sneakers",
  hobbies: ["reading", "gaming"],
  score: {
    math: 90,
    english: 70,
  },
  greet: function () {
    console.log("Hello class");
  },
});
console.log(list2);
console.log(list2.score.english); //prints out english score which is 70
console.log(list2.hobbies[1]); //prints out gaming cos it is at index 1 position in the hobbies
list2.greet(); //functions must be invoked using ().

//we can create an object using the Object constructor function. A constructor is Used as a template to create multiple objects with similar properties and methods.

function Person() {
  this.name = "John";
  this.age = 20;
  //this keyword refers to a new object being created
}
const person1 = new Person(); //this creates a new instance of person
console.log(person1.name); //outputs John

//object.create - this creates a new object from an existing object
let animal = {
  name: "dog",
  bark: true,
};
let snake = Object.create(animal); //snake inherits the featues of animal - name and bark
snake.name = "Python";
snake.bark = false;
// we can add new features
snake.crawl = true;
console.log(snake);
console.log(animal);

//delete an object property
delete school.students;
console.log(school); //this removes students property from school object

//in method - returns boolean value and it checks if a property exists in an object
console.log("aa" in list2); //false because there is no key called aa in list 2
console.log("shoe" in list2); // true

//object.assign - copies properties from one object to a target object
console.log(Object.assign(list2, school));

//Object.entries - returns an array of the key/values of an object
let objectEntries = Object.entries(school);
console.log(objectEntries);

//ObjectFromEntries -  creates an object from a list of key/value pairs in an array
console.log(Object.fromEntries(objectEntries));

//Object.keys - returns an array of the keys of an object
console.log(Object.keys(school));

//Object.values - returns an array of the values of an object
console.log(Object.values(school));

//Object.freeze - this prevents an object from being modified
Object.freeze(school);
school.name = "The Bulb";
console.log(school); //school object has been frozen so this prevents the name key from being modified. We cant update the value of the school name from Techstudio to the bulb.
