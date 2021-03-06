import {connect} from "react-redux";
import TodoList from "../components/TodoList";
import {fetchTodos, toggleTodo} from "../actions";
import {getVisibleTodos} from "../selectors";
import {toJS} from "../HOCs/toJS";


const mapStateToProps = (state) =>({
    todos: getVisibleTodos(state)
});

const mapDispatchToProps = (dispatch) =>({
    toggleTodo: id => dispatch(toggleTodo(id)),
    fetchTodos: ()=>dispatch(fetchTodos())
})

export const ToDoListContainer =  connect(mapStateToProps, mapDispatchToProps)(TodoList)(toJS(TodoList))