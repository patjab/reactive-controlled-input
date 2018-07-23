import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    funValue: ""
  }

  controlFunInput = (e) => {
    this.setState({funValue: e.target.value.toUpperCase()})
  }

  render() {
    return (
      <div className="App">
        <label>Fun Input:</label> <input type="text" value={this.state.funValue} onChange={this.controlFunInput}/>
      </div>
    )
  }
}

export default App;
