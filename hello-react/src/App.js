import React from "react";
import "./App.css";
import "./MyComponent.js";
import MyComponent from "./MyComponent.js";
import Counter from "./Counter";
import Say from "./Say";

function App() {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <>
      <div className="react">{name}</div>
      <input></input>
      <MyComponent>칠드런 리액트</MyComponent>
      <Counter />
      <Say></Say>
    </>
  );
  //return <div style={style}>{name}</div>
}
export default App;
