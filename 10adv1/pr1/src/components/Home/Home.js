import React from "react";
import Button from "../../../../pr2/src/components/UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.logoutHandler}>Log out</Button>
    </Card>
  );
};

export default Home;
