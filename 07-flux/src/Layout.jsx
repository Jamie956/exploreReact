import React, { Component } from "react";
import { Dispatcher } from "flux";

/**
 * action types
 */
const ADD = 'ADD'
const UPDATE = 'UPDATE'

/*
 * action creators
 */
const addActionCreator = (text) => {
  return { type: ADD, text }
}
const updateActionCreator = (text) => {
  return { type: UPDATE, text }
}

/**
 * Dispatcher
 */
const dispatcher = new Dispatcher;

/**
 * reducer
 */
const handleActions = (action) => {
  switch (action.type) {
    case ADD: {
      console.log('ADD');
      break;
    }
    case UPDATE: {
      console.log('UPDATE');
      break;
    }
  }
}
dispatcher.register(handleActions.bind(handleActions));

/**
 * action
 */
const addAction = (text) => {
  dispatcher.dispatch(addActionCreator(text));
}
const updateAction = (text) => {
  dispatcher.dispatch(updateActionCreator(text));
}

export default class Layout extends Component {
  render() {
    return (
      <div>
        <p><button onClick={() => {addAction(Date.now())} }>add</button></p>
        <p><button onClick={() => {updateAction(Date.now())} }>update</button></p>
      </div>
    );
  }
}