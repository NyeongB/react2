import React, { Component } from "react";
import ValidationSample from "./ValidationSample";
import IterationSample from "./IterationSample";

export default class App extends Component {
  render() {
    return (
      <>
        <ValidationSample></ValidationSample>
        <IterationSample></IterationSample>
      </>
    );
  }
}

// import React from "react";
// import "./App.css";
// import "./MyComponent.js";
// import MyComponent from "./MyComponent.js";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";

// function App() {
//   const name = "리액트";
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16,
//   };
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input></input>
//       <MyComponent>칠드런 리액트</MyComponent>
//       <Counter />
//       <Say></Say>
//       <EventPractice></EventPractice>
//       <ValidationSample></ValidationSample>
//     </>
//   );
//   //return <div style={style}>{name}</div>
// }
// export default App;
