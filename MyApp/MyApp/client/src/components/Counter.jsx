import "./Counter.css";
import { useState } from "react";
import { useEffect } from "react";
const Counter = () => {

    const [count, setCount] = useState(0);
    const[message, setMessage] = useState("");
    useEffect(() => {
        setMessage(`Updated Count: ${count}`);
    },[count])
    function increment() {
        console.log("count=",count+1);
        setCount(count + 1);
      }
      function decrement() {
        console.log("count=",count-1);
        setCount(count - 1);
      }
    return (
        <div>
            <h1>Counter App</h1>
            <div className="counter">
                <button className="btn" onClick={decrement}>
                    -
                </button>
                <div className="id1">{count}</div>
                <button className="btn" onClick={increment}>
                    +
                </button>
            </div>
            <h2>{message}</h2>
        </div>
    );
}

export default Counter;