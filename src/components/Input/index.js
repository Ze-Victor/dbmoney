import React from "react";
import "./style.css";

export const Input = (props) => {
  return (
    <form>
      <input
        className="inputComponent"
        type={props.type}
        placeholder={props.placeholder}
      />
    </form>
  );
};
