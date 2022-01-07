import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialog() {
  return (
    <Dialog
      title={<h1 style={{ color: "purple" }}>Hello</h1>}
      description="For Web FrontEngineer"
      button="Close"
    />
  );
}
