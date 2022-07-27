import React from "react";
import "./style.css";

export const ButtonLarge = (props) => {
  return (
    <button className="buttonLargeComponent" onClick={props.onClick}>
      {props.textButton}
    </button>
  );
};
