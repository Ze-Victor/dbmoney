import React from "react";
import "./style.css";
export const Header = (props) => {
  return (
    <div className="containerHeader">
      <h1 className="marginTitle">{props.title}</h1>
    </div>
  );
};
