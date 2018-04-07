/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * action creators
 */

export function addTodo(text) {
  console.log('Call addTodo')
  console.log('arg: '+text)
  console.log({ type: ADD_TODO, text })
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  console.log('Call toggleTodo')
  console.log('arg: '+index)
  console.log({ type: TOGGLE_TODO, index })
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  console.log('Call setVisibilityFilter')
  console.log('arg: '+filter)
  console.log({ type: SET_VISIBILITY_FILTER, filter })
  return { type: SET_VISIBILITY_FILTER, filter }
}

/**
 * You see
 */

addTodo('It is addTodo')
toggleTodo('It is toggleTodo')
setVisibilityFilter('It is setVisibilityFilter')