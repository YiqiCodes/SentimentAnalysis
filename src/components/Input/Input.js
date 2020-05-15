import React from "react";

import { LoginInput } from "./Input.styles.js";

const Input = ({ value, handleOnChange }) => {
  return (
    <LoginInput
      placeholder="Please Enter Name"
      value={value}
      onChange={handleOnChange}
    />
  );
};

export default Input;
