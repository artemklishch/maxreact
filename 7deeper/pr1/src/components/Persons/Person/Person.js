import React, { Component } from "react";
import classes from "./Person.css";
import Auxilery from "../../../hoc/Auxilery";

// const Person = (props) => {
//   console.log("[Person.js rendering...]");
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

class Person extends Component {
  render() {
    console.log("[Person.js rendering...]");
    return (
      // <div className={classes.Person}>
      //   <p onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} years old!
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input
      //     type="text"
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </div>
      // [
      //   <p key="1" onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} years old!
      //   </p>,
      //   <p key="2">{this.props.children}</p>,
      //   <input
      //     key="3"
      //     type="text"
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // ]

      // <React.Fragment>
      //   <p onClick={this.props.click}>
      //     I'm {this.props.name} and I am {this.props.age} years old!
      //   </p>
      //   <p>{this.props.children}</p>
      //   <input
      //     type="text"
      //     onChange={this.props.changed}
      //     value={this.props.name}
      //   />
      // </React.Fragment>

      <Auxilery>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Auxilery>
    );
  }
}

export default Person;
