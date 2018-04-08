import { createStore } from "redux";

/**
 * action types
 */
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

/**
 * action creators
 */
const toIncrement = () => {
  return { type: INCREMENT }
}

const toDecrement = () => {
  return { type: DECREMENT }
}

/**
 * reducers
 */
function counter(state = 0, action) {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

/**
 * store
 */
const store = createStore(counter)

store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(toIncrement())
store.dispatch(toIncrement())
store.dispatch(toDecrement())