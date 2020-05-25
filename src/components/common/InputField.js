import React from 'react';

const InputField = (props) => {
  const { label, name, error, ...rest } = props;

  return (
    <div className="FormGroup">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        name={name}
        className="FormControl"
      />
      {!!error && <div className="FormControl-Invalid">{error}</div>}
    </div>
  );
}
 
export default InputField;