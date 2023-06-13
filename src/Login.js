import React, { useEffect } from 'react';
import LoginForm from './raphealsFiles/login/Main';
import "./raphealsFiles/login/Login.css";
import { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { ActiveNightmode, ChangePassword } from './aSlice';

export default () => {
  const a = useSelector(state => state.a);
  const dispatch = useDispatch();

  const [nightmode, useNightmode] = useState(a.Nightmode)

  let nightTheme = nightmode ? "dark-mode" : "light-mode"
  let themeButton = nightmode ? "Too Dark?" : "Too Bright?" 

  return (
      <div className={`body body__background--${nightTheme} ${nightTheme}`}>
        <button className={`panel__button mode--button ${nightTheme}`} onClick={(e) => {dispatch(ActiveNightmode(nightmode)); useNightmode(!nightmode); console.log("Redux: " + a.Nightmode); console.log("State: " + nightmode)}}>{themeButton}</button>
        <LoginForm themes={nightTheme}/>
      </div>
  );
}
