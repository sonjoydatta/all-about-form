export default function validate(values, required) {
  let errors = {};

  if (required.name && !values.name) {
    errors.name = 'Name is required';
  }

  if (required.businessName && !values.businessName) {
    errors.businessName = 'Business name is required';
  }

  if (required.email) {
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is not valid';
    }
  }

  if (required.phone && !values.phone) {
    errors.phone = 'Phone number is required';
  }

  if (required.street && !values.street) {
    errors.street = 'Street address is required';
  }

  if (required.apartment && !values.apartment) {
    errors.apartment = 'Apartment/suite is required';
  }

  if (required.city && !values.city) {
    errors.city = 'City is required';
  }

  if (required.state && !values.state) {
    errors.state = 'State is required';
  }

  if (required.zipcode && !values.zipcode) {
    errors.zipcode = 'Zip code is required';
  }

  return errors;
}