import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: "Saurabh Sameer", age: 25},
      { name: "Atul Valibhav", age: 28},
      { name: "Aditya Kumar", age: 24}
    ],
    otherstate : "No other state"
  }
  switchHandler = (nameReceived) => {
    this.setState (
      {
        person: [
          { name: nameReceived, age: 25},
          { name: "Atul Valibhav", age: 28},
          { name: "Aditya Kumar", age: 24}
        ]
      }
    )
  };

  clickHandler = (event) => {
    this.setState (
      {
        person: [
          { name: "Saurabh Sameer", age: 25},
          { name: "Atul Valibhav", age: 28},
          { name: event.target.value, age: 24}
        ]
      }
    )
  };
  
  render() {
    return(
      <div>
          <Person name={this.state.person[0].name} age={this.state.person[0].age}/> 
          <Person name={this.state.person[1].name} age={this.state.person[1].age}/>  
          <Person name={this.state.person[2].name} age={this.state.person[2].age} click={this.clickHandler}/>
          <button onClick = {this.switchHandler.bind(this, "Saurabh Shrivastava")}> Click Me!</button>
      </div>
    );
  }
}

export default App;
