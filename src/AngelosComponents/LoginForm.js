import React from 'react';
import './AngelosCss/LoginForm.css'
import { useState } from 'react';

function LoginForm() {

    const loginButton = (event) =>{
        event.preventDefault();
        
        console.log("Login Successful!")
    }
    return (
        <form className='loginForm' onSubmit={loginButton}>
            <h2 className='login-now-title' >Login</h2>
            <input className = "login-input" type='email'></input>
            <br />
            <input className='login-input' type='password'></input>
            <button id="login-button" >Login</button>
        </form>
    )
}

export default LoginForm;