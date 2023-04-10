import React from 'react';
import './AngelosCss/SignUpForm.css'
import { useState } from 'react';
import LoginForm from './LoginForm';
import { signUpFormValidation } from './AngeloAuthentication/signUpFormAuth';

function SignUpForm() {
    const [formInputValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [errors,setErrors] = useState({});


    const signUp = (event) => {
        event.preventDefault();
        const errors = signUpFormValidation(formInputValues);
        setErrors(errors); //setting errors to error object being returned in function
        
        if(Object.keys(errors).length === 0){//checks if theres any errors in the object being returned by the errors variable which we set to a function
            console.log("Sign Up Successful", formInputValues);
            setLoginForm(true);
        }

    }

    const setUserInfo = (event) =>{
        setFormValues({...formInputValues,[event.target.name]: event.target.value})
    }

    const [showLoginForm, setLoginForm] = useState(false);
    if(showLoginForm){
        return(
            <React.Fragment>
                <LoginForm />
            </React.Fragment>
        )
    }

    return (
        <form className='signup-form' onSubmit={signUp}>
            <h2 className='signup-now-title' >Sign Up Now!</h2>
            <input className = "signup-input" type='text' name='firstName' placeholder='First Name' value={formInputValues.firstName} onChange={setUserInfo} />
            {errors.firstName && <div className='signup-error'>{errors.firstName}</div>}
            <br />
            <input className = "signup-input" type='text' name='lastName' placeholder='Last Name' value={formInputValues.lastName} onChange={setUserInfo}></input>
            {errors.lastName && <div className='signup-error'>{errors.lastName}</div>}
            <br />
            <input className = "signup-input" type='email'  name='email' placeholder='Email' value={formInputValues.email} onChange={setUserInfo}></input>
            {errors.email && <div className='signup-error'>{errors.email}</div>}
            <br />
            <input className = "signup-input" type='password' name='password' placeholder='Password' value={formInputValues.password} onChange={setUserInfo}></input>
            {errors.password && <div className='signup-error'>{errors.password}</div>}
            <br />
            <input className = "signup-input" type='password'  name='confirmPassword' placeholder='Confirm Password' value={formInputValues.confirmPassword} onChange={setUserInfo}></input>
            {errors.confirmPassword && <div className='signup-error'>{errors.confirmPassword}</div>}
            <br />
            <button id="signup-button" type='submit'>Sign Up</button>
        </form>
    );

}
export default SignUpForm;