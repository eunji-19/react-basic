import React from "react";

export default function CustomDialog(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.description}</h4>
    </div>
  );
}
