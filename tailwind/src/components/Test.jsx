import React, { useState } from "react";

function Test() {
    let [counter, setCount] = useState(15);
    function addNum () {
        // setCount(counter + 1);
        setCount(counter +1);
    }
    return (
        <div>
            <h1>Hello count is {counter}</h1>
            <button onClick={addNum}>Click</button>
        </div>
    )
}
export default Test;