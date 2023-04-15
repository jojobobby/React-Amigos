import React, { useEffect, useState } from "react";
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
    
    //Tempted to remove this...
    //And just put it inside a css file using bem methodoligy on top of its default.
    const style = {
        input: {
            title: {
                marginTop: '5px',
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
    return (
        <Form.Panel title="Authentication" style={style} width={"480px"} children={
            <React.Fragment>
                <Form.Input style={style} name="email" title="Email" placeholder="Enter Email" type={6}/>
                <Form.Input style={style} name="password" title="Password" placeholder="Enter Password" type={1}/>
                <Form.Button style={style} callback={AttemptLogin}>Login</Form.Button>
            </React.Fragment>
        }></Form.Panel>
    )
}

export default LoginForm