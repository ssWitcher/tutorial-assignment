import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "aad", name: "Saurabh Sameer", age: 25},
      { id: "asasda", name: "Atul Valibhav", age: 28},
      { id: "asdas", name: "Aditya Kumar", age: 24}
    ],
    showPersons: false
  }

  togglePerson = () => {
   console.log("Inside Toggle");
   const showPersonCurrentValue = this.state.showPersons;
   console.log(!showPersonCurrentValue);
   this.setState({
      showPersons: !showPersonCurrentValue
   })
  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState (
      {
        persons: persons
      }
    )
  };

  nameChangeHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex( person => {
      return person.id === personId;
    })
    const person = this.state.persons[personIndex];
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState(
      {
        persons: persons
      }
    )
  }
  
  render() {
    let personContent = null;
    if (this.state.showPersons)
    {
      personContent = (
        <div>
         {this.state.persons.map( (person, index) => {
           return <Person name={person.name} 
           age={person.age} 
           click={() => this.deleteHandler(index)} 
           key={person.id}
           changed={(event)=> this.nameChangeHandler(event, person.id)}/>
         })}
        </div>
      );
    }
    return(
      <div>
        <button onClick = {this.togglePerson}> Click Me!</button>
        {console.log(personContent)}
        {personContent}
      </div>
    );
  }
}

export default App;
