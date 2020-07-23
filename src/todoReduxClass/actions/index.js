import {ADD_TODO, SET_FILTER, SET_TODO_TEXT, TOGGLE_TODO} from "./actionTypes";

export const addTodo = (text) => {
    let id = Date.now();
    return {
    type: ADD_TODO,
    id,
    text}
}

export const toggleTodo = id =>({
    type: TOGGLE_TODO,
    id
})

export const setFilter = filter => ({
    type: SET_FILTER,
    filter
})

export const setTodoText = text => ({
    type: SET_TODO_TEXT,
    text
})
