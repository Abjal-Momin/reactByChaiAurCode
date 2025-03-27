import React from "react";
import { useState } from "react";

function Counter() {
  let [counter, setCount] = useState(15);
  const addValue = () => {
    setCount(prevCount=> prevCount + 1);
    setCount(prevCount=> prevCount + 1);
  };
  const remove = () => {
    // setCount(counter - 1);
    setCount(prevCount=> prevCount - 1);
  };
  return (
    <body className="bg-slate-900 h-svh flex flex-col justify-center items-center text-white">
      <h1 className="m-2 text-3xl font-bold">Hello {counter}</h1>
      <p className="m-3 text-1xl font-medium">Count {counter}</p>
      <button onClick={addValue} className="m-3 p-3 bg-indigo-600 rounded-xl">
        Add Count
      </button>
      <br />
      <button onClick={remove} className="m-3 p-3 bg-indigo-600 rounded-xl">
        Remove Count
      </button>
    </body>
  );
}

export default Counter;
