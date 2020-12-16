import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: ''
    }
  }

  inputText = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.inputText(e)} />
        <p>{this.state.inputVal}</p>
      </div>
    )
  }
}

export default App;

