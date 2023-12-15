import React, { useState } from 'react';

const FormVal = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    feedback: '',
    validationErrors: {},
    acceptedTerms: false,
    submitted: 0
  });

  const handleOnChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'text' ? target.value : target.checked;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const isFormValid = validateFields();
    if (isFormValid) {
      setFormState((prevState) => {
        return {
                                 
          ...prevState,
          submitted: prevState.submitted + 1
        };
      });
    }
  };

  const validateFields = () => {
    const { firstName, feedback, acceptedTerms } = formState;
    const errors = {};

    if (!firstName) {
      errors['firstName'] = 'First Name Cannot be empty';
    }

    if (!feedback) {
      errors['feedback'] = 'Feedback Cannot be empty';
    } else if (feedback && feedback.length < 5) {
      errors['feedback'] = 'Feedback should have at least 5 characters';
    }

    if (!acceptedTerms) {
      errors['acceptedTerms'] = 'Please accept terms';
    }

    setFormState({
      ...formState,
      validationErrors: errors
    });

    return Object.keys(errors).length === 0;
  };

  const {
    firstName: firstNameError,
    feedback: feedbackError,
    acceptedTerms: acceptedTermsError
  } = formState.validationErrors;

  return (
    <section>
      <h3>Form Submit events:</h3>
      <form onSubmit={handleOnSubmit}>
        <label>
          <span className="error">{firstNameError}</span>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formState.firstName}
            onChange={handleOnChange}
          />
        </label>

        <label>
          <span className="error">{feedbackError}</span>
          <input
            type="text"
            name="feedback"
            placeholder="Feedback"
            value={formState.feedback}
            onChange={handleOnChange}
          />
        </label>

        <label>
          <span className="error">{acceptedTermsError}</span>
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formState.acceptedTerms}
            onChange={handleOnChange}
          /> I accept the terms
        </label>

        <button type="submit">Submit</button>

        <p>Submitted {formState.submitted} times!</p>
      </form>
    </section>
  );
};

export default FormVal;
