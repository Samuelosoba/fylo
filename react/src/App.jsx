import Monday from "./Monday";
import Typo from "./Typo";
import { useState, useEffect } from "react";
import { products } from "./data";
import React from "react";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

// function App() {
//   const [textColor, setTextColor] = useState("orange"); //returns a value and a function to update that value
//   const [car, setCar] = useState({
//     brand: "BMW",
//     year: 2024,
//     model: "E30",
//   });
//   console.log("textColor", textColor);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     document.title = "Home page";
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   useEffect(() => {
//     console.log(`Count is:${count}`); //useEffect needs to keep track of the count variable in order for it to log to the console
// }, [count]); //count as the dependency variable

// const myStyle = {
//   color: "orange",
//   border: "1px solid black",
// };

// const updateTextColor = () => {
//   setTextColor("purple");
// };
// const updateBrandName = () => {
//   setCar((prev) => {
//     return { ...prev, brand: "Toyota" };
//   });
// };
// return (
//   <>
//     {products.map((items) => (
//       <div key={items.id}>
//         <h1>{items.title}</h1>
//       </div>
//     ))}
//     ; ;<h1 className="text-green-600">Count is:{count}</h1>
//     <h1>
//       {car.brand} {car.year} {car.model}
//     </h1>
//     <h1 style={{ color: textColor }}>Text color</h1>
//     <button onClick={updateTextColor} style={{ color: textColor }}>
//       Change text color
//     </button>
//     <button
//       onClick={() => setTextColor("purple")}
//       style={{ color: textColor }}
//     >
//       Change text color
//     </button>
//     <button onClick={updateBrandName}>update brand name</button>
//     <h1 className="heading">Hello react</h1>
{
  /* rendering componenets as a self closing component, but first we import */
}
// <h1 style={{ color: "green", fontSize: "30px" }}>
//   This is an inline sytle in react
// </h1>
// <h1 style={myStyle}> styling using objects</h1>
{
  /* passing props to componenets - introduce a varaiable name that references the data you are passing */
}
//       <Monday ebube={myStyle} />
//       <Typo text="Wednesday" font="50px" />
//       <Typo text="Thursday" col="blue" />
//     </>
//   );
// }
