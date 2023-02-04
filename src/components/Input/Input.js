import React, { useState } from "react";

export const Input = ({isSpan, error, ...rest }) => {

  return (
    <>
      <input {...rest} />
      {isSpan ? <span className="input__span-error">{error}</span> : <></>}
    </>
  )
}
