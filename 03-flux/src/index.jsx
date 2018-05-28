import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Dispatcher } from "flux";

const dispatcher = new Dispatcher;

const handleActions = (action) => {
  switch (action.type) {
    case 'ADD': {
      console.log('ADD');
      console.log(action.text);
      break;
    }
    case 'UPDATE': {
      console.log('UPDATE');
      console.log(action.text);      
      break;
    }
  }
}
dispatcher.register(handleActions.bind(handleActions));

/**
 * action
 */
const addAction = (text) => {
  dispatcher.dispatch({ type: 'ADD', text });
}
const updateAction = (text) => {
  dispatcher.dispatch({ type: 'UPDATE', text });
}

 class Layout extends Component {
  render() {
    return (
      <div>
        <p><button onClick={() => {addAction(Date.now())} }>add</button></p>
        <p><button onClick={() => {updateAction(Date.now())} }>update</button></p>
      </div>
    );
  }
}


render(<Layout /> , document.getElementById('root'));