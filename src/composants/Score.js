import React from "react";
import "./Score.css";
import Counter from "./Counter";
import ButtonStart from "./ButtonStart";

const Score = ({ onStartButton, smiley, bombLeft, secElapsed }) => {
  return (
    <div className="score-container">
      <Counter value={bombLeft} />
      <ButtonStart smileyIndex={smiley} onClickbutton={onStartButton} />
      <Counter value={secElapsed} />
    </div>
  );
};

export default Score;
