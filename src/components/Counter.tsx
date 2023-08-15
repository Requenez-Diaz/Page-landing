import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1> {count}</h1>
      <button onClick={incrementCount}>click this buttun increment</button>
      <button onClick={decrementCount}>this decrement</button>
    </div>
  );
};

export default Counter;
