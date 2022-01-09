import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  console.log("App running");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggling, setAllowToggling] = useState(false);
  const toggleParagrapgHandler = useCallback(() => {
    if (allowToggling) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggling]);
  const allowTogglingHandler = () => {
    setAllowToggling((prev) => !prev);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowTogglingHandler}>Allow toggling</Button>
      <Button onClick={toggleParagrapgHandler}>Show paragraph</Button>
      {/* <DemoOutput show={false} /> */}
      <DemoOutput show={showParagraph} />
    </div>
  );
}

export default App;
