import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Auxilery from "../../../hoc/Auxilery";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

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
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext; // "contextType" - зарезервированное свойство в Реакте
  // здесь мы можем тоже подключать контекст таким образом
  // это выражение предоставляет компоненте свойство "context"

  componentDidMount() {
    // document.querySelector('input').focus()
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
    console.log(this.context);
  }
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
        {this.context.authenticated ? "Authenticated" : "Please log in"}
        {/* <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? "Authenticated" : "Please log in"
          }
        </AuthContext.Consumer> */}
        {/* {this.props.isAuth ? "Authenticated" : "Please log in"} */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          // ref={(inptEl) => inptEl.focus()}
          // ref={(inptEl) => this.inputElement = inptEl}
          ref={this.inputElementRef}
        />
      </Auxilery>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
