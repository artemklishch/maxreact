import { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [val, setVal] = useState(60);
  const timer = useRef({ value: 60, time: null });
  const runInterval = () => {
    timer.current.time = setInterval(() => {
      console.log("first", val);
      if (timer.current.value <= 0) {
        setVal(60);
        timer.current.value = 60
      } else {
        timer.current.value = timer.current.value - 1;
        setVal((val) => val - 1);
      }
    }, 1000 / 60);
  };
  const stopTier = () => {
    clearInterval(timer.current.time);
    // setVal(60);
  };
  return (
    <div className="App">
      <p>{val}</p>
      <button onClick={runInterval}>Run Interval</button>
      <button onClick={stopTier}>Stop Interval</button>
    </div>
  );
}

export default App;
