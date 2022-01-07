/**
 * 2022.01.06(목)
 */
import React, { useReducer } from "react";

export default function Reducer() {
  const initialState = { count: 0, name: "Jin" };
  function reducer(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increment":
        return { count: state.count + 1, name: "RM" };
      case "decrement":
        return { count: state.count - 1, name: "J-Hope" };
      default:
        throw new Error("error");
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count : {state.count}
      <span>Name : {state.name}</span>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button
        style={{ margin: "10px" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}
