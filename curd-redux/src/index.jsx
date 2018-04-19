import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter } from 'react-router';

import rootReducer from './reducers';
import App from "./components/App";


const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
ReactDOM.render(
	// <BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	//  </BrowserRouter>
	,
	document.getElementById('root')
);

