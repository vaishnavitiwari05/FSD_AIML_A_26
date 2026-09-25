import React, { useState, useEffect } from 'react';
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  function toggleButton() {
    setRunning((prev) => !prev);
  }

  function resetButton() {
    setTime(0);
    setRunning(false);
  }

  const ms = time % 1000;
  const s = Math.floor((time / 1000) % 60);
  const m = Math.floor((time / 60000) % 60);

  return (
    <div >
      <h1>Stopwatch</h1>
      <div>
      <div className="watch">

        {m}:{s}:{ms}</div>
        <button className="btn" onClick={toggleButton}>
          {running ? 'Stop' : 'Start'}
        </button>
        <button className="btn" onClick={resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
