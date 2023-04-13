import React, { useState } from 'react';
import { ReactDOM } from 'react';
import LoginForm from './raphealsFiles/DiscordClone/Login';

function Website() {
  const style = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div style={style}>
      <LoginForm/>
    </div>
  );
}

export default Website;