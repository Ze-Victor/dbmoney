import React from "react";
import "./style.css";

export const ButtonSmall = (props) => {
  return (
    <button
      className={
        props.buttonColorPadrao
          ? "buttonSmallComponent buttonVerdeLimao"
          : "buttonSmallComponent buttonCinzaClaro"
      }
      onClick={props.onClick}
    >
      {props.textButton}
    </button>
  );
};
