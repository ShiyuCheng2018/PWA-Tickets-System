import {connect} from "react-redux";
import TodoList from "../components/TodoList";
import {fetchTodos, toggleTodo} from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "ALL": return todos
        case "COMPLETED":
            return todos.filter(item=> item.completed)
        case "ACTIVE":
            return todos.filter(item => !item.completed)
        default: return new Error("Unknown filter " + filter)
    }
}

const mapStateToProps = (state) =>({
    todos: getVisibleTodos(state.todos.data, state.filter)
});

const mapDispatchToProps = (dispatch) =>({
    toggleTodo: id => dispatch(toggleTodo(id)),
    fetchTodos: ()=>dispatch(fetchTodos())
})

export const ToDoListContainer =  connect(mapStateToProps, mapDispatchToProps)(TodoList)