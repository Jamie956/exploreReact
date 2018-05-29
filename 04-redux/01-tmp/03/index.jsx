import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

/**
 * reducers
 */
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

/**
 * store
 */
const store = createStore(counterReducer);

const incrementAction = () => {
  store.dispatch({ type: 'INCREMENT' });
};

const decrementtAction = () => {
  store.dispatch({ type: 'DECREMENT' });
};

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
store.subscribe(render);
