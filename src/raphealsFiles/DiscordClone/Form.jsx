import React from "react";
import "./Website.css";

/*
    Types: 
    1 - Password
    default - text
*/

//Panel is for the background of a form, 
//you start with a panel and pass in form children as a content prop
const Panel = function (props) {
    //Styles
    const width = props.width;
    const content = props.content;
    const style = {
        backgroundColor: "gray",
        boxShadow: '1px 2px 9px',
        borderRadius: "8px",
        width: width,
        height: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    }
    
    return (
      <div style={style}>
           {content}
      </div>
    )

}

const Input = function (props) {
    const title = props.title;
    const placeholder = props.placeholder;
    const name = props.name;
    const styles = props.style ? props.style : {};
    let type = props.type;

    //Styling for the input and title, 
    //both can be modified through the style prop if you want to pass in different values
    const style = {
        input: {
            alignText: "center",
            boxShadow: '0px 1px 3px #f1f1f1',
            backgroundColor: '#f4f4f4',
            borderRadius: '8px',
            border: '1px solid #dcdcdc',
            padding: '6px',
            fontSize: '16px',
            lineHeight: '1',
            outline: 'none',
            ':focus': {
            borderColor: '#007aff',
            },
            ...styles.input},
        title: {
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '4px',
            ...styles.title}
    }   

    //Switching the type for the input,
    //could have made this simplier but I feel this way I can add different types of forms in a clear view.
    switch (type) {
        case 1:
            type = "password"
        break;
        default:
            type = "text"
        break;
    }


    //The single Input Title and Input box
    //div is not necessary but could be nice to use for when I start using the BEM css method
    return (
        <React.Fragment>
            <div id="Input-Box">
                <h2 style={style.title}>{title}</h2>
                <input style={style.input} type={type} name={name} placeholder={placeholder}/>
            </div>
        </React.Fragment>
    )
}

const Button = function (props) {
    //Callback for when the button is clicked.
    const callback = props.callback;
    //Styles
    const styles = props.style ? props.style : {};;
    const style = {
        backgroundColor: '#007aff',
        borderRadius: '8px',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '64px',
        padding: '8px 16px',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '1.2',
        textDecoration: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        border: 'none',
        boxShadow: '0px 1px 3px #00f1fd',
        cursor: 'pointer',
        outline: 'none',
        transition: 'background-color 0.2s ease-in-out',
        ':hover': {
        backgroundColor: '#0069d9',
        },
        ':active': {
        backgroundColor: '#0053a1',
        boxShadow: 'none',
        },
        ':focus': {
        backgroundColor: '#007aff',
        boxShadow: '0px 0px 0px 2px #f1f1f1',
        },
        ...styles
    }

    //This "Login" in the button tag will be changed to {displayName} that will be passed in through props.
    return (
       <button style={style} onClick={callback}>Login</button>
    )
}


export default {
    Panel,
    Input,
    Button
}