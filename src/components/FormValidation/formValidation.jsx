import React, { useState } from 'react';
import './error.css'


const FormValidation = () => {

    // to manage the input state ;
    const [state, setState] = useState({
        firstName: '',
        password: '',
        feedBack: '',
        acceptedTerms: false,

    });

    //to manage the error state ;
    const [validationErrors, setValidationErrors] = useState({});

    const validateFields = () => {
        const { firstName, password, feedBack, acceptedTerms } = state;
        const errors = {};
        if (firstName.length == 0) {
            errors.firstName = "firstName can't empty"
        }
        else if (firstName.length < 3) {
            errors.firstName = "Please Enter Valid Name"
        }

        if (password.length == 0) {
            errors.password = "Password can't empty"
        }
        else if (password.length < 8) {
            errors.password = "Please Enter strong password atleast 8 character"
        }

        if (feedBack.length == 0) {
            errors.feedBack = 'Feedback Cannot be empty'
        } else if (feedBack.length < 5) {
            errors.feedBack = 'Feedback should have at least 5 characters'
        }

        if (!acceptedTerms) {
            errors.acceptedTerms = 'Please accept terms'
        }
        setValidationErrors(errors);
        // return Object.keys(errors).length === 0
    };

    const { firstName: firstNameError, password: passwordError, feedBack: feedBackError, acceptedTerms: acceptedTermsError } = validationErrors;
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        // const inputValue = checked ? true : value;
        setState(prev => ({ ...prev, [name]: value }));

        //(prev) => {...}:To get previous state value in the component.
        //{ ...prev, [name]: value }: 
        // copy of the previous state (prev) and then adds or updates a property [name] with the new value value. 
        //[name]: value updates or adds a property in the copied 

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateFields();

    }

    return (
        <>
            <section>
                <h2>Login Form</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label> First Name : </label>
                        <input type="text" name='firstName' placeholder='Enter your First Name' value={state.firstName} onChange={handleChange} />

                        <br />
                        <span className='error'>{firstNameError}</span>
                    </div>

                    <div>
                        <label> Password </label>
                        <input type="text" name='password' placeholder='Enter your Password ' value={state.password} onChange={handleChange} />

                        <br />
                        <span className='error'>{passwordError}</span>
                    </div>

                    <div>
                        <label> Feed Back :</label>
                        <input type="text" name='feedBack' placeholder='Enter your Feed Back ' value={state.feedBack} onChange={handleChange} />
                        <br />  <span className='error'>{feedBackError}</span>
                    </div>
                    <div>
                        <input type="checkbox" name='acceptedTerms' value={state.acceptedTerms} onChange={handleChange} />

                        I accept the Terms and Condition
                        <br />
                        <span className='error'>{acceptedTermsError}</span>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>

                </form>
            </section>

        </>
    )
}

export default FormValidation