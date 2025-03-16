//dom refers to the document object model
//it allows you to manipulate html elements
//it is a tree of nodes that allows you to add, remove, and modify parts of the html document
//To use the dom, you first have to identify the html element to manipulate

//to target html elements
//getElementById - target elements by the attached id
const helloId = document.getElementById("hello");
console.log(helloId);

//to change text content
helloId.textContent = "Hello Dom";

//getElementsbyClassName
const H3 = document.getElementsByClassName("h3");
console.log(H3);

//getElementsByTagname
const getPTags = document.getElementsByTagName("p");
console.log(getPTags); //gets all p tags in html

//getElementsByname attribute
let coding = document.getElementsByName("coding");
console.log(coding);

//target using query selectors
const getH1Query = document.querySelector(".query");
console.log(getH1Query);

const classH3 = document.querySelectorAll(".h3");
console.log(classH3);

//accessing the node tree
const getLastChild = document.getElementById("parent").lastElementChild;
console.log(getLastChild); //gets last element in a tree node

const getIndexChild = document.getElementById("parent").children[0];
console.log(getIndexChild); //gets the first element in the targeted tree node

//create elements
const createDiv = document.createElement("div");
console.log(createDiv);

//innerHTML method allows you to write html content in the dom
createDiv.innerHTML = "<p> Today is tuesday </p>";

//append elements
const getParentDiv = document.getElementById("parent");
getParentDiv.appendChild(createDiv);
console.log(getParentDiv);

//styling using js = js uses camelCasing to style
helloId.style.color = "red";
helloId.style.marginTop = "40px";

//event listeners and event handlers
//event listeners is a method that allows js to listen for events in your app. It could be the click of a button, or a hover of an element.
//event handlers is a response to a event - what should happen when an event occurs.

//syntax of event listener
// element.addEventListener("eventType", handlerfunction); //we specify the event type to listen for, and the function that should run when that event happens.
const getBtn = document.querySelector("#btn");
getBtn.addEventListener("click", () => {
  getBtn.textContent = "hello Button";
  getBtn.style.backgroundColor = "green";
  alert("Hey there");
});
