import React from "react";
import "./style.css";

export const Button = (props) => {
  return (
    <button className="buttonComponent" onClick={props.onClick}>
      {props.textButton}
    </button>
  );
};
