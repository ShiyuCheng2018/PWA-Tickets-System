import React, {Component} from 'react';
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            filter: "ALL"
        }
        this.nextTodoId = 0;
    }

    getVisibleTodos = ()=>{
        const currentFilter = this.state.filter;
        return this.state.todos.filter(item=>{
            if(currentFilter === "ACTIVE"){
                return !item.completed
            }else if(currentFilter === "COMPLETED"){
                return item.completed
            }else {
                return true
            }
        })
    }

    addTodo = text => {
        const todo ={
            id: this.nextTodoId++,
            text,
            completed: false
        }
        const newTodos = [todo, ...this.state.todos];
        this.setState({todos: newTodos})
    }

    toggleTodo = id => {
        const newTodos = this.state.todos.map(item=>{
            return item.id === id? {...item, completed: !item.completed} : item
        })
        this.setState({
            todos: newTodos
        })
    }

    setVisibilityFilter = filter =>{
        this.setState({
            filter
        })
    }

    render() {
        const todos = this.getVisibleTodos();
        const {filter} = this.state;

        return (
            <div>
                <AddToDo addTodo={this.addTodo}/>
                <TodoList todos={todos} toggleTodo={this.toggleTodo}/>
                <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter}/>
            </div>
        );
    }
}


export default App;
