import React, { Component } from "react";

//组件属性传递，获取
const UserForm = ({ user }) => {
  return (
    <div> {user.name} </div>
  );
};
const App = () => {
  let user = { name: "tom" };
  return <UserForm user={user} />;
};

export default App;
