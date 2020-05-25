import React from 'react';

const InputSelect = (props) => {
  const { label, name, error, children, ...rest } = props;

  return (
    <div className="FormGroup">
      <label htmlFor={name}>{label}</label>
      <select
        {...rest}
        id={name}
        name={name}
        className="FormControl"
      >{children}</select>
      {!!error && <div className="FormControl-Invalid">{error}</div>}
    </div>
  );
}
 
export default InputSelect;