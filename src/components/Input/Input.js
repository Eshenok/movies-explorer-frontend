export const Input = ({isSpan, error, className, ...rest }) => {

  return (
    <>
      <input {...rest} className={`${className} ${error ? "input_error" : ""}`} />
      {isSpan ? <span className="input__span-error">{error}</span> : <></>}
    </>
  )
}
