import React from "react";
import "./style.css";

export const Input = (props) => {
  return (  
      <input
        className="inputComponent"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />    
  );
};
