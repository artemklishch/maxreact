import React, { PureComponent } from "react";
import Person from "./Person/Person";

// const Persons = (props) => {
//   console.log("[Persons.js rendering...]");
//   return props.persons.map((person, index) => {
//     return (
//       <Person
//         key={person.id}
//         name={person.name}
//         age={person.age}
//         click={props.clicked.bind(this, index)}
//         changed={(e) => props.changed(e, person.id)}
//       />
//     );
//   });
// };

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state;
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     console.log("[Persons.js] shouldComponentUpdate");
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    // return null;
    return { message: "Snapshot" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }
  render() {
    console.log("[Persons.js rendering...]");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={this.props.clicked.bind(this, index)}
          changed={(e) => this.props.changed(e, person.id)}
        />
      );
    });
  }
}

export default Persons;
