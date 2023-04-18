import React, { useEffect, useState } from "react";
import Form from "./Form";
import Utils from "./Utils";

const LoginForm = function (props) {
    const themes = props.themes;

    const MIN_PASSWORD_LENGTH = 1;
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setErrors] = useState({
        email:"",
        password:"",
        confirmPassword:""
    })

    const changePassword = (e) => setPassword(e.target.value);
    const changeConfirmPassword = (e) => setConfirmPassword(e.target.value);
    const changeEmail = (e) => setEmail(e.target.value);
    const changeErrors = () => {
        const validEmail = validateCresidentials(email, "email");
        const validPassword = validateCresidentials(password, "password");
        const validConfirmPassword = validateCresidentials(confirmPassword, "confirmPassword");
        
        setErrors({
            email:validEmail,
            password:validPassword,
            confirmPassword:validConfirmPassword
        });
    } 

    const validateCresidentials = (value, type) => {
        console.log(value)
        switch (type) {
            case "email" :
                const validEmail = EMAIL_REGEX.test(value);
                return validEmail === false ? "email is not valid" : ""
            break;
            case "password" :
                if (value.length < MIN_PASSWORD_LENGTH) {
                    return "password is too short"
                }
            break;
            case "confirmPassword" :
                if (value != password) {
                    return "passwords do not match"
                }
            break;
        }

        return "";
    }

    const attemptLogin = (e) => {
        e.preventDefault();
        changeErrors()

        if (error.length >= 1) {
            return;
        }

        setTimeout(LoginSuccess, 1000);
    }

    const LoginSuccess = (e) => {
        //TODO
    }

    const style = {
        input: {
            title: {
                marginTop: '12px',
                marginBottom: '0px',
                outerHeight: '5px'
            },
            field: {
                marginBottom: '12px'
            }
        },
        button: {
          margin: '25px 0px 0px 0px'
        },
        panel: {
            title: {
                marginBottom: '35px',
                outerHeight: '5px'
            }
        }
    };

    //A collection of components made to make creating forms easier.

    //NOTE PLEASE NOTICE > > > these form "JSX Elements", are pretty nice for organization but they are super restrictive.
    //This was mainly for testing out importing jsx elements, again, although nice, they are very strict so can only be used in script scenarios.
    return (
        <React.Fragment>
            <Form.Panel title="Admin Panel" style={style} width={"480px"} children={
            <React.Fragment>
                <Form.Input theme={themes} style={style} name="email" title="Email" placeholder="Enter Email" type={6} onChange={changeEmail}/>
                <div className="panel__errorMessage">{error.email}</div>
                <Form.Input theme={themes} style={style} name="password" title="Password" placeholder="Enter Password" type={1} onChange={changePassword}/>
                <div className="panel__errorMessage">{error.password}</div>
                <Form.Input theme={themes} style={style} name="confirmPassword" title="Re-enter Password" placeholder="Enter Password" type={1} onChange={changeConfirmPassword}/>
                <div className="panel__errorMessage">{error.confirmPassword}</div>
                <Form.Button theme={themes} style={style} callback={attemptLogin} name="Login" ></Form.Button>
            </React.Fragment>
            }></Form.Panel>
        </React.Fragment>
        
    )
}

export default LoginForm