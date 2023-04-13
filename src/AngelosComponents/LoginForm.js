import React from 'react';
import './AngelosCss/LoginForm.css'
import { useState } from 'react';
import { loginFormValidation } from './AngeloAuthentication/Authentication';

function LoginForm() {
    const [userLoginInfo, setUserLoginInfo] = useState({
        email: "",
        password: ""
    });



    const storeUserLoginInfo = (event) => {
        let userData = { ...userLoginInfo };
        userData[event.target.name] = event.target.value;
        setUserLoginInfo({ ...userData })

    }
    const [errors,setErrors] = useState({});
    const login = (event) => {
        event.preventDefault();
        const errors = loginFormValidation(userLoginInfo);
        setErrors(errors);
        if(Object.keys(errors).length === 0){
            console.log("Login Successful!", userLoginInfo)
        }

    }
    return (
        <form className='loginForm' onSubmit={login}>
            <h2 className='login-now-title' >Login</h2>
            <input className="login-input" type='email' name='email' placeholder='Email' value={userLoginInfo.email} onChange={storeUserLoginInfo}></input>
            {errors.email && <div className='login-error'>{errors.email}</div>}
            <br />
            <input className='login-input' type='password' name='password' placeholder='Password' value={userLoginInfo.password} onChange={storeUserLoginInfo}></input>
            {errors.password && <div className='login-error'>{errors.password}</div>}
            <button id="login-button" >Login</button>
        </form>
    )
}

export default LoginForm;