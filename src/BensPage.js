import './App.css';
import React, { useState } from 'react';

function BenPage() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="ben-title"> Ben's Page </p>
      </header>
        <BenButton />
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