import React, { useState } from "react";

export const Input = ({labelText, isSpan, onChange, classes, ...rest }) => {

  const spanClasses = ["input__span-error"];
  const [error, setError] = useState("");

  function onChanges(e) {
    onChange(e);
    if (e.target.validationMessage) {
      setError(e.target.validationMessage);
    } else {
      setError("");
    }
  }

  return (
    <>
      <input {...rest} onChange={onChanges}/>
      {isSpan ? <span className={spanClasses.join(' ')}>{error}</span> : <></>}
    </>
  )
}
