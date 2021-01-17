import React, { Component, useState } from "react";
import "./App.css";
import Person from "./Person/Person";

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: "Max", age: "20" },
//     { name: "Bob", age: "34", hobby: "My hobbies: Racing" },
//     { name: "Tom", age: "26" },
//   ]);
//   const switchNameHandler = () => {
//     setPersons([
//       { name: "Maximillian", age: "20" },
//       { name: "Bob", age: "34", hobby: "My hobbies: Racing" },
//       { name: "Tom", age: "28" },
//     ]);
//   };
//   return (
//     <div className="App">
//       <h1>Hello, I am a react App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>

//       {persons.map((el, index) =>
//         el.hobby ? (
//           <Person key={index} name={el.name} age={el.age}>
//             {el.hobby}
//           </Person>
//         ) : (
//           <Person key={index} name={el.name} age={el.age} />
//         )
//       )}
//     </div>
//   );
// };

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "20" },
      { name: "Bob", age: "34", hobby: "My hobbies: Racing" },
      { name: "Tom", age: "26" },
    ],
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "20" },
        { name: "Bob", age: "34", hobby: "My hobbies: Racing" },
        { name: "Tom", age: "28" },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: "20" },
        { name: event.target.value, age: "34", hobby: "My hobbies: Racing" },
        { name: "Tom", age: "28" },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>Hello, I am a react App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler("Maximus")}>
          Switch Name
        </button>

        {this.state.persons.map((el, index) =>
          el.hobby ? (
            <Person
              click={this.switchNameHandler.bind(this, "Max!")}
              change={this.changeNameHandler}
              key={index}
              name={el.name}
              age={el.age}
            >
              {el.hobby}
            </Person>
          ) : (
            <Person
              click={this.switchNameHandler.bind(this, "Max!")}
              change={this.changeNameHandler}
              key={index}
              name={el.name}
              age={el.age}
            />
          )
        )}
      </div>
    );
  }

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "I am React App")
  // );
}

export default App;
