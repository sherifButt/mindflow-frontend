



// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
  // Password should be at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Password should contain at least one uppercase letter, one lowercase letter, and one digit
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;

  return (
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    digitRegex.test(password)
  );
};

// Validate required field
export const validateRequired = (value) => {
  return value.trim() !== '';
};

// Validate form data
export const validateForm = (formData) => {
  let errors = {};

  for (const field in formData) {
    const value = formData[field];

    if (!validateRequired(value)) {
      errors[field] = 'This field is required';
    }
  }

  return errors;
};

These utility functions can be used to validate email format, password strength, required fields, and form data. You can import and use these functions in your form validation logic.

