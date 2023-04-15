import React from "react";
import Utils from "./FormUtils";

//Panel is for the background of a form, 
//you start with a panel and pass in form components as children
const Panel = function (props) {
    const width = {width: props.width};
    const styles = props.style ? props.style : {};
    const children = props.children;
    const title = props.title ? props.title : "Panel";
    const panelStyles = {...styles.panel.background, ...width};
    const titleStyles = {...styles.panel.title};

    
    //Panel Title and Panel Box JSX element.
    return (
      <div style={panelStyles} className="panel">
           <h2 className="panel__Title" style={titleStyles}>{title}</h2>
           {children}
      </div>
    )

}

const Input = function (props) {
    const title = props.title;
    const placeholder = props.placeholder;
    const name = props.name;
    const styles = props.style ? props.style : {};
    const type = Utils.InputTypeConverter(props.type);
    const titleStyles = {...styles.input.title};
    const inputStyles = {...styles.input.field};

    //Input Title and Input Box JSX element.
    return (
        <React.Fragment>
            <div>
                <h2 className="panel__inputTitle" style={titleStyles}>{title}</h2>
                <input className="panel__inputField" style={inputStyles} type={type} name={name} placeholder={placeholder}/>
            </div>
        </React.Fragment>
    )
}

const Button = function (props) {
    //Callback for when the button is clicked.
    const callback = props.callback;
    const styles = props.style ? props.style : {};
    const buttonStyles = {...styles.button}

    //Button JSX element.
    return (
       <button className="panel__button" style={buttonStyles} onClick={callback}>Login</button>
    )
}


export default {
    Panel,
    Input,
    Button
}