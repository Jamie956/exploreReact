import { createStore } from "redux"
import { Counter } from './Counter.jsx'

/**
 * store
 */
const counterStore = createStore(Counter)

counterStore.subscribe(() =>
  console.log(counterStore.getState())
)

/**
 * action
 */
counterStore.dispatch({ type: 'INCREMENT' })
counterStore.dispatch({ type: 'INCREMENT' })
counterStore.dispatch({ type: 'DECREMENT' })