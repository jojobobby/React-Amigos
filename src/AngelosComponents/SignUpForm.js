import React from 'react';
import './AngelosCss/SignUpForm.css'
import { useState } from 'react';
import LoginForm from './LoginForm';

function SignUpForm() {
    const [formInputValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const getSignUpInfo = (event) => {
        event.preventDefault();

        console.log("Sign Up Credentials", formInputValues);
        setLoginForm(true);

    }

    const setFormInfo = (event) =>{
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
        <form className='signup-form' onSubmit={getSignUpInfo}>
            <h2 className='signup-now-title' >Sign Up Now!</h2>
            <input type='text' name='firstName' placeholder='First Name' value={formInputValues.firstName} onChange={setFormInfo} />
            <br />
            <input type='text' name='lastName' placeholder='Last Name' value={formInputValues.lastName} onChange={setFormInfo}></input>
            <br />
            <input type='email'  name='email' placeholder='Email' value={formInputValues.email} onChange={setFormInfo}></input>
            <br />
            <input type='password' name='password' placeholder='Password' value={formInputValues.password} onChange={setFormInfo}></input>
            <br />
            <input type='password'  name='confirmPassword' placeholder='Confirm Password' value={formInputValues.confirmPassword} onChange={setFormInfo}></input>
            <br />
            <button type='submit'>Sign Up</button>
        </form>
    );

}
export default SignUpForm;