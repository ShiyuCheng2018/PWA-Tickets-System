import {connect} from "react-redux";
import {setTodoText, addTodo} from "../actions";
import AddToDo from "../components/AddToDo";
import {getText} from "../selectors";

const mapStateToProps = state => ({
    text: getText(state)
});

const mapDispatchToProps = dispatch => ({
    setTodoText: text => dispatch(setTodoText(text)),
    addTodo: text => dispatch(addTodo(text))
})

export const AddToDoContainer = connect(mapStateToProps, mapDispatchToProps)(AddToDo);
