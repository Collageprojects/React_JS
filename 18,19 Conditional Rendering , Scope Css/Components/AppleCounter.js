import Button from "./Button";

import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import styles from "./AppleCounter.css";
// import styles from "./Counter.module.css";

// import { createRoot } from "react-dom/client";
import { useState } from "react";

function AppleCounter() {
  const TotalApple = 10;
  const [RightAppleCounter, setRightAppleCounter] = useState(0);
  const [LeftAppleCounter, setLeftAppleCounter] = useState(
    TotalApple - RightAppleCounter
  );

  const RightClickHandler = () => {
    // move to right side
    if (LeftAppleCounter > 0) {
      setRightAppleCounter(RightAppleCounter + 1);
      setLeftAppleCounter(LeftAppleCounter - 1);
    }
  };
  const LeftClickHandler = () => {
    // move to left side
    if (RightAppleCounter > 0) {
      setRightAppleCounter(RightAppleCounter - 1);
      setLeftAppleCounter(LeftAppleCounter + 1);
    }
  };
  return (
    <section>
      <AppleBasket AppleCount={LeftAppleCounter} BasketName={"Basket -1"} />
      <Button
        className={styles.button}
        ClickHandler={LeftClickHandler}
        ImageUrl={LeftArrow}
        ButtonName="Move to Left-Side"
      ></Button>
      <Button
        ClickHandler={RightClickHandler}
        ImageUrl={RightArrow}
        ButtonName="Move to Right-Side"
      ></Button>

      <AppleBasket AppleCount={RightAppleCounter} BasketName={"Basket -2"} />
    </section>
  );
}

export default AppleCounter;
