import React, { Component } from 'react';
import List from './Components/List';
import NewTask from './Components/NewTask';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskArray: []
    }
  }

  render() {
    return (
      <div className="App" >
        <h1>My to do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       tasks: [],
//       inputVal: ''
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(e) {
//     this.setState({ inputVal: e.target.value })
//   }

//   handleSubmit() {
//     const { tasks, inputVal } = this.state;

//     this.setState({
//       tasks: [...tasks, inputVal],
//       inputVal: ''
//     })
//   }
