import React, { Component } from 'react';
import Todo from './Components/Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      inputVal: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value })
  }

  handleSubmit() {
    const { tasks, inputVal } = this.state;

    this.setState({
      tasks: [...tasks, inputVal],
      inputVal: ''
    })
  }

  render() {
    //console.log(this.state.tasks)
    return (
      <div className="App">
        <h1>My to do list:</h1>
        <input value={this.state.inputVal} onChange={e => this.handleChange(e)} />
        <button onClick={this.handleSubmit}>Add</button>
        <Todo tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
