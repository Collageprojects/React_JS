import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // const count = MyStateArray[0]
  // const setCount = MyStateArray[1]
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increase Counter
      </button>
    </div>
  );
}

export default Counter;
