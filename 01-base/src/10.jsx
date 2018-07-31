import React, { Component } from "react";

//从父组件获取children（即子标签）
function FancyBorder({ color, children }) {
  return <div style={{ color: color }}>{children}</div>;
}

function App() {
  return (
    <FancyBorder color="blue">
      <h1>Welcome</h1>
    </FancyBorder>
  );
}

export default App;
