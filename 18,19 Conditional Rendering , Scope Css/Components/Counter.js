import { useState } from "react";
import styles from "./Counter.module.css";

console.log(styles);

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>{count}</h1>
      <button
        className={styles.button}
        onClick={() => {
          console.log("clicked");
          setCount(count + 1);
        }}
      >
        Increase Counter
      </button>
    </div>
  );
}

export default Counter;
