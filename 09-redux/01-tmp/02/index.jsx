import { combineReducers, createStore } from "redux";

/**
 * action types
 */
// const SET_NAME = 'SET_NAME'
// const SET_AGE = 'SET_AGE'
// const ADD_ITEM = 'ADD_ITEM'

/**
//  * action creators
//  */
// const setNameActionCreator = (name) => {
//   return { type: SET_NAME, payload: name }
// }

// const setAgeActionCreator = (age) => {
//   return { type: SET_AGE, payload: age }
// }

// const addItemActionCreator = (item) => {
//   return { type: ADD_ITEM, payload: item }
// }

/**
 * reducers
 */
const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_NAME': {
			return { ...state, name: action.payload };
			break;
		}
		case 'SET_AGE': {
			return { ...state, age: action.payload };
			break;
		}
	}
	return state;
}

const itemReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_ITEM': {
			return state.concat({
				id: Date.now(),
				text: action.payload,
			});
			break;
		}
	}
	return state;
}

const rootReducer = combineReducers({
	user: userReducer,
	item: itemReducer
})

/**
 * store
 */
const store = createStore(rootReducer)

store.subscribe(() => {
	console.log(store.getState());
})

store.dispatch({ type: 'SET_NAME', payload: 'Jamie' })
store.dispatch({ type: 'SET_AGE', payload: 18 })

store.dispatch({ type: 'ADD_ITEM', payload: 'FOO' })
store.dispatch({ type: 'ADD_ITEM', payload: 'BAR' })