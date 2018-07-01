import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
       userName: 'Navin' 
  }

  inputChangeHandler = ( event ) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <p>
          Assignment one
        </p>
        <UserInput changed = {this.inputChangeHandler} currentName = {this.state.userName} />
        <UserOutput 
          userName = {this.state.userName} 
          text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" 
          />
        <UserOutput 
          userName = {this.state.userName} 
          text = " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
          />
        <UserOutput 
          userName = {this.state.userName} 
          text = " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages" 
          />
      </div>
    );
  }
}

export default App;
