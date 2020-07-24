import {ADD_TODO, SET_FILTER, SET_TODO_TEXT, TOGGLE_TODO, FETCH_TODOS_FAILURE, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS} from "./actionTypes";

const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
});

const fetchTodosSuccess = (data) => ({
    type: FETCH_TODOS_SUCCESS,
    data
});

const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    error
});

export const fetchTodos = () =>{
    return (dispatch) =>{
        dispatch(fetchTodosRequest());
        return fetch("./mock/todos.json").then(res=>{
            res.json().then(data=>{
                dispatch(fetchTodosSuccess(data));
            })
        }).catch(err=> {console.log("an error."); dispatch(fetchTodosFailure(err))})
    }
}


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
