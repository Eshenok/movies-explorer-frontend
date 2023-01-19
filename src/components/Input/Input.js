import React from "react";

export const Input = ({labelText, isSpan, ...rest }) => {
  return (
    <>
      <input {...rest} />
      {isSpan ? <span className="input__span-error"> </span> : <></>}
    </>
  )
}
