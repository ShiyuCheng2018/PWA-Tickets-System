import {connect} from "react-redux";
import TodoList from "../components/TodoList";
import {toggleTodo} from "../actions";

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
    todos: getVisibleTodos(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch) =>({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export const ToDoListContainer =  connect(mapStateToProps, mapDispatchToProps)(TodoList)