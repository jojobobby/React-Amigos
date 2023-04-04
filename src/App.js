import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [showPage, setShowPage] = useState(false);

  const togglePage = () => {
    setShowPage(!showPage);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={togglePage}>
          {showPage ? 'Hide Page' : 'Show Page'}
        </button>

        {/* Conditionally render the page content based on the value of 'showPage' */}
        {showPage && (
          <div>
            <h1>Welcome to My Website</h1>
            <p>This is the homepage of my website.</p>
            <p>Feel free to browse around!</p>
          </div>
        )}

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

export default App;
