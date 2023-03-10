import React from "react";
import "./Counter.css";
import digit0 from "../images/digit0.bmp";
import digit1 from "../images/digit1.bmp";
import digit2 from "../images/digit2.bmp";
import digit3 from "../images/digit3.bmp";
import digit4 from "../images/digit4.bmp";
import digit5 from "../images/digit5.bmp";
import digit6 from "../images/digit6.bmp";
import digit7 from "../images/digit7.bmp";
import digit8 from "../images/digit8.bmp";
import digit9 from "../images/digit9.bmp";

const Counter = ({ value }) => {
  const num1 = Math.floor(value / 100);
  const num2 = Math.floor((value - num1 * 100) / 10);
  const num3 = value % 10;

  const digit = value => {
    switch (value) {
      case 0:
        return <img src={digit0} alt="" />;
      case 1:
        return <img src={digit1} alt="" />;
      case 2:
        return <img src={digit2} alt="" />;
      case 3:
        return <img src={digit3} alt="" />;
      case 4:
        return <img src={digit4} alt="" />;
      case 5:
        return <img src={digit5} alt="" />;
      case 6:
        return <img src={digit6} alt="" />;
      case 7:
        return <img src={digit7} alt="" />;
      case 8:
        return <img src={digit8} alt="" />;
      case 9:
        return <img src={digit9} alt="" />;
      default:
        return null;
    }
  };

  return (
    <div className="counter">
      <span>{digit(num1)}</span>
      <span>{digit(num2)}</span>
      <span>{digit(num3)}</span>
    </div>
  );
};

export default Counter;
