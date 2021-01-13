import React from "react";

const Person = (props) => {
  return (
    <p>
      I am a {props.name}. I am {props.age} years old <br/>
      <span>{props.children}</span>
    </p>
  );
};
export default Person;
