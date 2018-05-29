import React from "react";
import ReactDOM from "react-dom";

//string as props
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

//children
function FancyBorder({ color, children }) {
  return <div style={{ color: color }}>{children}</div>;
}

function App2() {
  return (
    <FancyBorder color="blue">
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

//component as props
function Foo() {
  return <h1>Foo</h1>;
}

function Bar() {
  return <h1>Bar</h1>;
}

function SplitPane({ left, right }) {
  return (
    <div>
      <div style={{ float: "left" }}>{left}</div>
      <div style={{ float: "right" }}>{right}</div>
    </div>
  );
}

function App3() {
  return <SplitPane left={<Foo />} right={<Bar />} />;
}


ReactDOM.render(<App4 />, document.getElementById("root"));
