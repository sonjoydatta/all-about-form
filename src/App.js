import React, { useEffect } from 'react';

import './App.css';
import { InputField, InputSelect } from './components/common';
import useForm from './components/form/useForm';
import validate from './components/form/RegisterValidation';

const App = () => {
  // Form submit callback function
  const getFormData = () => {
    if (Object.keys(values).length > 0) {
      console.log(values);
      setCommitting(true);

      // If the API request is successful 
      setTimeout(() => {
        scrollToTop();
        resetForm();
        setCommitting(false);
        setAlert({
          type: 'success',
          message: 'You have registered successfully!'
        });
      }, 5000);
    }
  }

  // Get propaties from the useForm hook
  const {
    values,
    errors,
    setValues,
    handleChange,
    handleSubmit,
    resetForm,
    scrollToTop,
    FormSubmit,
    setCommitting,
    setAlert,
    AlertMessage
  } = useForm(getFormData, validate);

  // If need to set values from the API request
  useEffect(() => {
    setValues({
      name: 'Sonjoy Datta'
    });
  }, [setValues]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="Form" noValidate>
        <p>This is an example of handle form all events, set successful/unsuccessful messages, and reset form after submit all using a custom hook.</p>
        <AlertMessage />
        <h4>General information</h4>
        <InputField
          label="Your name"
          type="text"
          name="name"
          value={values.name || ''}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <InputField
          label="Business name"
          type="text"
          name="businessName"
          value={values.businessName || ''}
          onChange={handleChange}
          error={errors.businessName}
          required
        />
        <InputField
          label="Email address"
          type="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <InputField
          label="Phone number"
          type="tel"
          name="phone"
          value={values.phone || ''}
          onChange={handleChange}
        />
        <h4>Address</h4>
        <InputField
          label="Street address"
          type="text"
          name="street"
          value={values.street || ''}
          onChange={handleChange}
          error={errors.street}
          required
        />
        <InputField
          label="Apartment/suite"
          type="text"
          name="apartment"
          value={values.apartment || ''}
          onChange={handleChange}
        />
        <InputField
          label="City"
          type="text"
          name="city"
          value={values.city || ''}
          onChange={handleChange}
          error={errors.city}
          required
        />
        <InputSelect
          label="State"
          name="state"
          value={values.state || ''}
          onChange={handleChange}
          error={errors.state}
          required
        >
          <option value="">Select an option</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
        </InputSelect>
        <InputField
          label="Zip code"
          type="text"
          name="zipcode"
          value={values.zipcode || ''}
          onChange={handleChange}
          error={errors.zipcode}
          required
        />
        <FormSubmit
          type="submit"
          label="Register"
        />
      </form>
    </div>
  );
}

export default App;
