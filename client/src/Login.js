import React, { Component, useEffect } from 'react';
import LoginForm from './raphealsFiles/login/Main';
import "./raphealsFiles/login/Login.css";
import { useState, useRef } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { ActiveNightmode } from './aSlice';

export default () => {
  const a = useSelector(state => state.a);
  const dispatch = useDispatch();
  const isMounted = useRef();

  const [darkTheme, useDarkTheme] = useState(a.Nightmode)

  const nightTheme = a.Nightmode ? "dark-mode" : "light-mode"
  const themeButton = a.Nightmode ? "Too Dark?" : "Too Bright?"

  useEffect(() => {
    if(isMounted.current) {
      dispatch(ActiveNightmode(darkTheme));
    }
    else {
      isMounted.current = true;
    }
  },[darkTheme])

  return (
      <div className={`body body__background--${nightTheme} ${nightTheme}`}>
        <button className={`panel__button mode--button ${nightTheme}`} onClick={() => {useDarkTheme(!darkTheme)}}>{themeButton}</button>
        <LoginForm themes={nightTheme}/>
      </div>
  );
}
