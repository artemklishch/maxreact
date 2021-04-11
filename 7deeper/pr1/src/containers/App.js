import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Auxilery from "../hoc/Auxilery";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js constructor]");
  }
  state = {
    persons: [
      { id: "dsf", name: "Max", age: 28 },
      { id: "dvb", name: "Manu", age: 29 },
      { id: "dki", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false,
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js getDerivedStateFromProps]", props);
    return state; // должен вернуть обновленный стейт
  }
  // componentWillMount() {
  //   // устарвеший, сейчас не используется, будет скоро удален
  //   console.log("[App.js componentWillMount]");
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate", nextProps, nextState);
    return true;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("[App.js] componentDidUpdate", prevProps, prevState);
  }

  componentDidMount() {
    console.log("[App.js componentDidMount]");
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p) => p.id === id);
    persons[personIndex].name = event.target.value;
    // this.setState({ persons, changeCounter: this.state.changeCounter + 1 });
    this.setState((prevState, props) => {
      return { persons, changeCounter: prevState.changeCounter + 1 };
    });
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

  toggleCockpit = () => {
    this.setState({ showCockpit: !this.state.showCockpit });
  };
  loginHandler = () => this.setState({ isAuthenticated: true });
  render() {
    console.log("[App.js render]");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.isAuthenticated}
        />
      );
    }
    return (
      <Auxilery>
        <button onClick={this.toggleCockpit}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.isAuthenticated,
            login: this.loginHandler,
          }} // здесь важно, чтоб соответствовала структура контексту, а значения могут быть дргими
        >
          {this.state.showCockpit && (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              togglePersons={this.togglePersonsHandler}
              login={this.loginHandler}
            />
          )}
          {persons}
        </AuthContext.Provider>
      </Auxilery>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
