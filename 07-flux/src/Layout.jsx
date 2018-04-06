import React, { Component } from "react";
import { Dispatcher } from "flux";

/**
 * Dispatcher
 */
const dispatcher = new Dispatcher;

/**
 * Store
 */
class Store {
  handleActions(action) {
    console.log(action);
    switch(action.type) {
      case "CREATE": {
        console.log('CREATE.');
        break;
      }
      case "UPDATE": {
        console.log('UPDATE.');
        break;
      }
    }
  }
}
const store = new Store;
dispatcher.register(store.handleActions.bind(store));

/**
 * Action
 */
class Action {
  create(text) {
    dispatcher.dispatch({
      type: "CREATE",
      text
    });
  }
  update(text) {
    dispatcher.dispatch({
      type: "UPDATE",
      text
    });
  }
}
const action = new Action;

/**
 * Layout
 */
export default class Layout extends Component {
  constructor(){
    super()
    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleCreate(){
    action.create(Date.now());
  }
  
  handleUpdate(){
    action.update(Date.now());
  }
  
	render() {
		return (
			<div>
        <p><button onClick={this.handleCreate}>Create</button></p>
        <p><button onClick={this.handleUpdate}>Update</button></p>
			</div>
		);
	}
}