import React, { useEffect, useState } from "react";
// import "./Website.css"; For now.
import Form from "./Form";

const LoginForm = function () {
    //the email and password will be changed on button click for the login page.
    //just displaing it here to use later.
    const [value, setValues] = useState({
        email:"",
        password:""
    })

    //The call back that will be passed into the button on click
    let AttemptLogin = (e) => {
        e.preventDefault();
    }
    
    //styling that will be passed to the button and the input
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

    //A collection of components made to make creating forms easier.
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