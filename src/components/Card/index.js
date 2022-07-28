import React from "react";

export const Card = (props, children) => {
  return (
    props.size === "sm" ?
      <div className="card-sm">
          {props.header}
          <h1>{props.content}</h1>
      </div>
    :
      <div className="card-md">
        {props.header}
        {children}
      </div>
  );
};
