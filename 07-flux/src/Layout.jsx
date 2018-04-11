import React, { Component } from "react";
import { Dispatcher } from "flux";

/**
 * action types
 */
const CREATE = 'CREATE'
const UPDATE = 'UPDATE'

/*
 * action creators
 */
const createAction = (text) => {
  return { type: CREATE, text }
}
const updateAction = (text) => {
  return { type: UPDATE, text }
}

/**
 * Dispatcher
 */
const dispatcher = new Dispatcher;


const handleActions = (action) => {
  console.log(action);
  switch (action.type) {
    case CREATE: {
      console.log('CREATE.');
      break;
    }
    case UPDATE: {
      console.log('UPDATE.');
      break;
    }
  }
}
dispatcher.register(handleActions.bind(handleActions));


const create = (text) => {
  dispatcher.dispatch(createAction(text));
}
const update = (text) => {
  dispatcher.dispatch(updateAction(text));
}

export default class Layout extends Component {
  render() {
    return (
      <div>
        <p><button onClick={() => {create(Date.now())} }>create</button></p>
        <p><button onClick={() => {update(Date.now())} }>update</button></p>
      </div>
    );
  }
}