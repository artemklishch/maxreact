import React from "react";

import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEom running");
  return (
    <MyParagraph>{props.show ? "This is a new paragraph" : ""}</MyParagraph>
  );
};

export default React.memo(DemoOutput);
