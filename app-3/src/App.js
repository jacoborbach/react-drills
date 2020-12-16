import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myArr: ['spaghetti', 'meatballs', 'pepporoni', 'basil!', 'avocado'],
      inputVal: ''
    }
  }
  handleInput(e) {
    this.setState({ inputVal: e.target.value })
  }

  render() {

    let filteredArray = this.state.myArr
      .filter((element, index) => {
        return element.includes(this.state.inputVal);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App" >
        <input onChange={e => this.handleInput(e)} />
        {filteredArray}
      </div>
    );
  }
}

export default App;
