import React from "react";

const Input = ({ value, handleOnChange }) => {
  return <input value={value} onChange={handleOnChange} />;
};

export default Input;
