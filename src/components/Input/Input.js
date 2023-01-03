import React from "react";

export const Input = ({labelText, containerClass, ...rest }) => {
  return (
    <div className={containerClass}>
      <label className="input__label">{labelText}</label>
      <input {...rest} />
      <span className="input__span-error input__span-error_visible">sadsadsadsadsadsa </span>
    </div>
  )
}
