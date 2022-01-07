/**
 * 2022.01.07(금)
 */
import React from "react";
import withLoading from "./withLoading";

function InputCustomComponent() {
  return <input defaultValue="Input" />;
}
export default withLoading(InputCustomComponent);
