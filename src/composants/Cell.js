import React, { useState } from "react";
import "./Cell.css";
import mine_gris from "../images/mine_gris.bmp";
import mine_rouge from "../images/mine_rouge.bmp";
import mine_barree from "../images/mine_barree.bmp";
import flag from "../images/drapeau.bmp";

let buttonPressTimer = null;

const Cell = props => {
  const [longTouch, setLongTouch] = useState(false);

  const handleButtonPress = () => {
    if (props.game === 1) {
      // on utilise le "touch" donc on désactive le contextmenu
      setLongTouch(true);
      buttonPressTimer = setTimeout(() => {
        // fait clignoter le smiley pour qu'on voit que le drapeau a été posé sous son doigt
        props.setSmiley(2);
        const smileyTimer = setTimeout(() => {
          props.setSmiley(1);
          clearTimeout(smileyTimer);
        }, 200);
        props.onRightClick(props.posX, props.posY);
      }, 1000);
    }
  };

  const handleButtonRelease = () => {
    clearTimeout(buttonPressTimer);
  };

  return (
    <div
      className={props.revealed ? "cell" + props.cellSize + " flat-border" : "cell" + props.cellSize + " edge-border"}
      onClick={() => props.onLeftClick(props.posX, props.posY)}
      onMouseDown={event => {
        if (props.game === 1 && event.nativeEvent.which === 1 && !props.revealed) props.setSmiley(2);
      }}
      onMouseUp={event => {
        if (props.game === 1 && event.nativeEvent.which === 1) props.setSmiley(1);
      }}
      onTouchStart={handleButtonPress}
      onTouchEnd={handleButtonRelease}
      onMouseLeave={event => {
        if (props.game === 1) props.setSmiley(1);
      }}
      onContextMenu={event => {
        event.preventDefault();
        if (longTouch) return;
        props.onRightClick(props.posX, props.posY);
      }}
    >
      {props.revealed && props.bomb && <img src={mine_gris} alt="" />}
      {!props.revealed && props.flag && <img src={flag} alt="" />}
      {props.revealed && props.bomb && props.flag && <img src={flag} alt="" />}
      {props.revealed && !props.bomb && props.flag && <img src={mine_barree} alt="" />}
      {props.revealed && props.bomb && props.bombclicked && !props.flag && <img src={mine_rouge} alt="" />}
      {props.revealed && !props.flag && props.count > 0 && <h3 className={"color" + props.count}>{props.count}</h3>}
    </div>
  );
};

export default Cell;
