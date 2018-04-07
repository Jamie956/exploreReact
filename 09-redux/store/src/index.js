import { createStore } from 'redux'
import todoApp from './reducers'
import * as actions from './actions'

const store = createStore(todoApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(actions.addTodo('Learn about actions'))
store.dispatch(actions.addTodo('Learn about reducers'))
store.dispatch(actions.addTodo('Learn about store'))
store.dispatch(actions.toggleTodo(0))
store.dispatch(actions.toggleTodo(1))
store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_COMPLETED))
unsubscribe()