import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, I am a react App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="20" />
        <Person name="Bob" age="34">
          My hobbies: Racing
        </Person>
        <Person name="Tom" age="26" />
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
