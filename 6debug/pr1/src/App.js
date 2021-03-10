import React, { Component } from "react";
import classes from "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "dsf", name: "Max", age: 28 },
      { id: "dvb", name: "Manu", age: 29 },
      { id: "dki", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p) => p.id === id);
    persons[personIndex].name = event.target.value;
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePerson = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };
  render() {
    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={this.deletePerson.bind(this, index)}
                  changed={(e) => this.nameChangedHandler(e, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass.push(classes.Red);
    }
    const asignedClasses = [];
    if (this.state.persons.length <= 2) {
      asignedClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      asignedClasses.push("bold");
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={asignedClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass.join(" ")}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
