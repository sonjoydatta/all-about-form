import React, { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [committing, setCommitting] = useState(false);
  const [alert, setAlert] = useState(null);

  // Checking errors before return values
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      callback();
    }
    
    // eslint-disable-next-line
  }, [errors]);

  // Field change handler
  const handleChange = (event) => {
    const { name, value, required } = event.target;

    setValues({
      ...values,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: validate({[name]: value}, {[name]: required})[name]
    });
  }

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    let required = {};

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].tagName === 'INPUT' || elements[i].tagName === 'SELECT') {
        required[elements[i].name] = elements[i].required;
      }
    }

    setErrors(validate(values, required));
  }

  // Form reset handler
  const resetForm = () => {
    setValues({});
    setErrors({});
  }

  // Scroll to top when submit
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  // Form submit button
  const FormSubmit = (props) => {
    const { label, ...rest } = props;

    return (
      <button
        {...rest}
        disabled={committing}
        className="FormButton"
      >{committing ? 'Please wait...' : label}</button>
    );
  }

  // Set alert message
  const AlertMessage = () => {
    if (alert) {
      return (
        <div className={`AlertMessage ${alert.type}`}>
          <span className="AlertMessage-Close" onClick={() => setAlert(null)}>×</span>
          {alert.message}
        </div>
      );
    }

    return null;
  }

  return {
    values,
    errors,
    setValues,
    setErrors,
    handleChange,
    handleSubmit,
    resetForm,
    scrollToTop,
    FormSubmit,
    setCommitting,
    setAlert,
    AlertMessage
  }
}

export default useForm;