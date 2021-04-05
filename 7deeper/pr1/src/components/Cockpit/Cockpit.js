import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work 2nd in useEffect");
    }; // срабатывет каждый раз при перерендере компонента
  });
  const asignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    asignedClasses.push("red");
  }
  if (props.personsLength <= 1) {
    asignedClasses.push("bold");
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={asignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.togglePersons}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);