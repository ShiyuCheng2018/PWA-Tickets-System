import React, {Component} from 'react';


class AddToDo extends Component {

    handleChange = (e) =>{
        this.props.setTodoText(e.target.value)
    }

    handleClick = () =>{
        this.props.addTodo(this.props.text)
    }

    render() {
        return (
            <div>
                <input value={this.props.text} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }
}

export default AddToDo;
