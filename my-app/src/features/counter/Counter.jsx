import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increament, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increament());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button disabled={count === 0} onClick={handleDecrement}>
        Decrement
      </button>

      <button onClick={handleIncrementBy}>IncrementB By 5</button>
    </div>
  );
}

export default Counter;
