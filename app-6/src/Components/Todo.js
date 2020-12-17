import React, { Component } from 'react';

class Todo extends Component {


    render() {
        const displayToDos = this.props.tasks.map((element, index) => (
            <h1 key={index}>{element}</h1>
        ))
        //console.log("Props:", this.props)
        return (
            <div className="App">
                {/* <h1>{this.props.tasks}</h1> */}
                {displayToDos}
            </div>
        );
    }
}

export default Todo;
