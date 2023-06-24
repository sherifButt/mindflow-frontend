



const useForm = (initialValues, validations) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    setIsSubmitting(true);
  };

  const validateForm = (values) => {
    let errors = {};

    for (const field in validations) {
      const value = values[field];
      const validationRules = validations[field];

      for (const rule in validationRules) {
        const isValid = validationRules[rule].validate(value);

        if (!isValid) {
          errors[field] = validationRules[rule].message;
          break;
        }
      }
    }

    return errors;
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};

export default useForm;











