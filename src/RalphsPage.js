import React, { useState } from 'react';
import { ReactDOM } from 'react';
import LoginForm from './raphealsFiles/DiscordClone/Login';

function Website() {
  //Syling for the content
  const style = {
    display: "flex",
    justifyContent: "center"
  }

  //Returns a JSX element that contains a Login Form component.
  return (
    <div style={style}>
      <LoginForm/>
    </div>
  );
}

export default Website;