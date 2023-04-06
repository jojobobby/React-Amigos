import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function BenPage() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />   */}
        <p class="ben-title">
         Ben's Page
        </p>
        <BenButton />
      </header>
    </div>
  );
}

function BenButton() {
  return (
    <button class="ben-button">Don't Touch This Button</button>
  )
}

export default BenPage;