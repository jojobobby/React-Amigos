import React from 'react';
import './AngelosCss/SignUpForm.css'

function SignUpForm() {
    return (
        <form className='signup-form'>
            <h2 className='signup-now-title'>Sign Up Now!</h2>
            <input type='text' placeholder='First Name'></input>
            <br />
            <input type='text' placeholder='Last Name'></input>
            <br />
            <input type='email' placeholder='Email'></input>
            <br />
            <input type='password' placeholder='Password'></input>
            <br />
            <input type='password' placeholder='Confirm Password'></input>
            <br />
            <button type='submit'>Sign Up</button>
        </form>
    );

}
export default SignUpForm;