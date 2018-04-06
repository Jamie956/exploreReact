import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import PropTypes from 'prop-types'

/**
 * component
 */
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <p>Clicked: {value} times</p>
        <p><button onClick={onIncrement}>+</button></p>
        <p><button onClick={onDecrement}>-</button></p>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

/**
 * action
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const store = createStore(counter)

/**
 * render
 */
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
)

render()
store.subscribe(render)