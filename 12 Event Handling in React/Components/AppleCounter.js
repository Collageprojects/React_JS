import Button from "./Button";

import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const TotalApple = 10;
let RightAppleCounter = 0;
let LeftAppleCounter = TotalApple - RightAppleCounter;

function AppleCounter() {
  const RightClickHandler = () => {
    // move to right side
    if (LeftAppleCounter > 0) {
      RightAppleCounter++;
      LeftAppleCounter--;
      root.render(<AppleCounter />);
    }
  };
  const LeftClickHandler = () => {
    // move to left side
    if (RightAppleCounter > 0) {
      RightAppleCounter--;
      LeftAppleCounter++;
      root.render(<AppleCounter />);
    }
  };
  return (
    <section>
      <AppleBasket AppleCount={LeftAppleCounter} BasketName={"Basket -1"} />
      <Button
        ClickHandler={RightClickHandler}
        ImageUrl={RightArrow}
        ButtonName="Move to Right-Side"
      />
      <Button
        ClickHandler={LeftClickHandler}
        ImageUrl={LeftArrow}
        ButtonName="Move to Left-Side"
      />
      <AppleBasket AppleCount={RightAppleCounter} BasketName={"Basket -2"} />
    </section>
  );
}

export default AppleCounter;
