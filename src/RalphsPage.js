import React from 'react';
import LoginForm from './raphealsFiles/login/Main';
import "./raphealsFiles/login/Login.css";
import { useState } from 'react';

function Website() {
  const [nightMode, setNightMode] = useState(false);
  
  const changeNightMode = (e) => {
    setNightMode(!nightMode);
  }

  let nightTheme = nightMode ? "dark-mode" : "light-mode"
  let themeButton = nightMode ? "Too Dark?" : "Too Bright?" 

  return (
      <div className={`body body__background--${nightTheme} ${nightTheme}`}>
        <button className={`panel__button mode--button ${nightTheme}`} onClick={changeNightMode}>{themeButton}</button>
        <LoginForm themes={nightTheme}/>
      </div>
  );
}

export default Website;