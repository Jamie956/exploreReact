import React, { Component } from "react";

//根据情况渲染组件
const UserGreeting = props => <h1>Welcome back!</h1>;
const GuestGreeting = props => <h1>Please sign up.</h1>;

const App = props => {
  return <div>{true ? <UserGreeting /> : <GuestGreeting />}</div>;
};
export default App;
