import React from "react";

export const Input = ({labelText, ...rest }) => {
  return (
    <>
      <label className="input__label">{labelText}</label>
      <input {...rest} />
      <span className="input__span-error"> </span>
    </>
  )
}
