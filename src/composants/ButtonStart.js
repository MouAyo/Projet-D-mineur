import React, { useState } from "react";
import "./ButtonStart.css";
import smiley1 from "../images/smiley1.bmp";
import smiley2 from "../images/smiley2.bmp";
import smiley3 from "../images/smiley3.bmp";
import smiley4 from "../images/smiley4.bmp";

const ButtonStart = ({ smileyIndex, onClickbutton }) => {
  const [buttonUp, setButtonUp] = useState(true);

  return (
    <div
      className={buttonUp ? "button-start" : "button-start-down"}
      onClick={onClickbutton}
      onMouseDown={event => {
        if (event.nativeEvent.which === 1) setButtonUp(false);
      }}
      onMouseUp={event => {
        if (event.nativeEvent.which === 1) setButtonUp(true);
      }}
      onDragStart={event => {
        event.preventDefault();
        setButtonUp(true);
      }}
    >
      {smileyIndex === 1 && <img src={smiley1} alt="" />}
      {smileyIndex === 2 && <img src={smiley2} alt="" />}
      {smileyIndex === 3 && <img src={smiley3} alt="" />}
      {smileyIndex === 4 && <img src={smiley4} alt="" />}
    </div>
  );
};

export default ButtonStart;
