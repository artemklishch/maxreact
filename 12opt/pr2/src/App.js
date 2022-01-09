import React, { useState, useCallback, useMemo } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
  const [listTitle, setListTitle] = useState("My list");

  const changeTitleHamdler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={changeTitleHamdler}>Show paragraph</Button>
    </div>
  );
}

export default App;
