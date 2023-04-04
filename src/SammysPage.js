import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function SammyPage() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Sammys Page
        </p>

        {/* Conditionally render the page content based on the value of 'showPage' */}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default SammyPage;