
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import rootReducer from './reducers'

//关联根reducer
const store = createStore(rootReducer)

store.subscribe(() => console.log(store.getState()));

//Provider提供局部store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)