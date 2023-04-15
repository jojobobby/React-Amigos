import React from 'react';
import LoginForm from './raphealsFiles/login/Main';
import "./raphealsFiles/login/Login.css";

function Website() {

  //Returns a JSX element that contains a Login Form component.
  return (
      <div className="body body__background">
        <LoginForm/>
      </div>
  );
}

export default Website;