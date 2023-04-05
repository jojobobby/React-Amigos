import React from 'react';

function SignUpForm() {
    return (
        <form>
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