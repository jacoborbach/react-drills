import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      myArr: ['spaghetti', 'meatballs', 'pepporoni', 'basil!']
    }
  }

  render() {
    const mapArr = this.state.myArr.map((element, i) => (
      <h2 key={i}>{element}</h2>
    ))

    return (
      <div className="App">
        {mapArr}
      </div>
    );
  }
}

export default App;
