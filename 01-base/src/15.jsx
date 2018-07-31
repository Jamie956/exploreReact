import React, { Component } from "react";

//...传递剩下的属性
const Button = ({ kind, ...rest }) => {
  return <button className={kind === "a" ? "a" : "b"} {...rest} />;
};
const App = () => {
  return (
    <div>
      <Button kind="a" onClick={() => alert("click")}>
        click
      </Button>
    </div>
  );
};

export default App;
