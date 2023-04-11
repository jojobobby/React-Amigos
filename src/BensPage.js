import React, { useState } from 'react';
import './App.css';
import Board from './bensFiles/ben-tttgame.js';
import SignUpForm from './bensFiles/ben-signupform';

function BenPage() {
  return (
    <div className="App">
      <header className="App-header">
      <p className="ben-title"> Ben's Page </p>
      </header> 
      <BenButton />
      <Board />
      <SignUpForm />
    </div>
  );
}

function BenButton() {
  return (
    <div className="ben-button-div">
      <button className="ben-button">Don't Touch This Button</button>
    </div>
  )
}

export default BenPage;
