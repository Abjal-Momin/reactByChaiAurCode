import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addNum = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeNum = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello Wolrd! {counter}</h1>
      <h2>Count value : {counter} </h2>
      <button onClick={addNum}>Add Value {counter}</button>
      <br />
      <button onClick={removeNum}>Remove Value {counter}</button>
    </>
  );
}
export default App;
