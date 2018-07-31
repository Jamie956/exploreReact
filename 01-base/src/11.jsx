import React, { Component } from "react";

//组件作为属性传递
function Foo() {
  return <h1>Foo</h1>;
}

function Bar({ myComponent }) {
  return <div>{myComponent}</div>;
}

function App() {
  return <Bar myComponent={<Foo />} />;
}

export default App;
