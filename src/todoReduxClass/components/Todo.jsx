import React, {Component} from 'react';

class Todo extends Component {


    render() {
        const {text, completed} = this.props;

        return (
            <li onClick={this.props.onClick} style={{textDecoration: completed ?  "line-through" : "none"}}>
                <h1>{text}</h1>
            </li>
        );
    }
}

export default Todo;