import React, { Component } from "react";

const alertFun = () => alert("click!");

//点击事件
const App = () => {
  return <button onClick={alertFun}>click me</button>;
};

export default App;
