/*
 * action types
 */

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * action creators
 */

function addTodo(text) {
  console.log('Call addTodo')
  console.log('arg: '+text)
  console.log({ type: ADD_TODO, text })
  return { type: ADD_TODO, text }
}

function toggleTodo(index) {
  console.log('Call toggleTodo')
  console.log('arg: '+index)
  console.log({ type: TOGGLE_TODO, index })
  return { type: TOGGLE_TODO, index }
}

function setVisibilityFilter(filter) {
  console.log('Call setVisibilityFilter')
  console.log('arg: '+filter)
  console.log({ type: SET_VISIBILITY_FILTER, filter })
  return { type: SET_VISIBILITY_FILTER, filter }
}

addTodo('It is addTodo')
toggleTodo('It is toggleTodo')
setVisibilityFilter('It is setVisibilityFilter')