import Button from "./Button";

import LeftArrow from "../Assets/images/left-arrow.png";
import RightArrow from "../Assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import  './AppleCounter.css';

function AppleCounter() {
  return (
    <section>
      <AppleBasket AppleCount={10} BasketName={"Basket -1"} />
      <Button ImageUrl={RightArrow} />
      <Button ImageUrl={LeftArrow} />
      <AppleBasket AppleCount={0} BasketName={"Basket -2"} />
    </section>
  );
}

export default AppleCounter;
