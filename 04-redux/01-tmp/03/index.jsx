import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

//储存对象counter
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//关联储存对象
const store = createStore(counter);

//action,根据类型操作储存对象
const incrementAction = () => {
  store.dispatch({ type: 'INCREMENT' });
};
const decrementtAction = () => {
  store.dispatch({ type: 'DECREMENT' });
};

//react渲染
const render = () =>
  ReactDOM.render(
    <div>
      <p>Clicked: {store.getState()} times</p>
        <button onClick={() => incrementAction()}>+</button>
        <button onClick={() => decrementtAction()}>-</button>
    </div>,
    document.getElementById("root")
  );

render();

//监听dispatch,调用时触发
store.subscribe(render);
