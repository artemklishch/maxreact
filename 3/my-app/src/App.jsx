import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "20" },
      { name: "Bob", age: "34", hobby: "My hobbies: Racing" },
      { name: "Tom", age: "26" },
    ],
  };
  render() {
    const persons = this.state.persons;
    return (
      <div className="App">
        <h1>Hello, I am a react App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>

        {persons.map((el, index) =>
          el.hobby ? (
            <Person key={index} name={el.name} age={el.age}>
              {el.hobby}
            </Person>
          ) : (
            <Person key={index} name={el.name} age={el.age} />
          )
        )}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "I am React App")
    // );
  }
}

export default App;
