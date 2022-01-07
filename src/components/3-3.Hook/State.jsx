/**
 * 2022.01.06(목)
 */
import React, { useState } from "react";

export default function State() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      Count : {count}
      <br />
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button
        style={{ margin: "10px" }}
        onClick={() => setCount((prev) => prev - 1)}
      >
        {" "}
        -
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
