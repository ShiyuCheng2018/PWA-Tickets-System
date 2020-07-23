import React, {Component} from 'react';
import {AddToDoContainer, FooterContainer, ToDoListContainer} from "./containers"

class App extends Component {

    render() {
        return (
            <div>
                <AddToDoContainer/>
                <ToDoListContainer/>
                <FooterContainer/>
            </div>
        );
    }
}


export default App;
