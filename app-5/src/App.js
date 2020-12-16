import React, { Component } from 'react';
import Image from './Components/Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Image src={"https://i.pinimg.com/originals/cf/7c/90/cf7c90528a9a1a55f260f06a6a07a038.jpg"} />
      </div>
    );
  }
}

export default App;
