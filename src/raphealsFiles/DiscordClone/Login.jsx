import React, { useEffect, useState } from "react";
import "./Website.css";
import Form from "./Form";

const LoginForm = function () {
    const [value, setValues] = useState({
        email:"",
        password:""
    })

    let AttemptLogin = (e) => {
        e.preventDefault();

    }
    
    const style = {
        input: {
            title: {
                marginTop: '5px',
                outerHeight: '5px'
            },
            input: {
                marginTop: '5px'
            }
        },
        button: {
          margin: '25px'
        }
    };

    return (
        <Form.Panel width={"500px"} content={
            <React.Fragment>
                <Form.Input style={style.input} name="email" title="Email" placeholder="Enter Email"/>
                <Form.Input style={style.input} name="password" title="Password" placeholder="Enter Password" type="1"/>
                <Form.Button style={style.button} callback={AttemptLogin}>Login</Form.Button>
            </React.Fragment>
        }></Form.Panel>
    )
}

export default LoginForm