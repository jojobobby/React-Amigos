import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  const navBar = useRef(null);
  const listElements = useRef(null);
  const [height, setHeight] = useState("0")
  const [fontSize, setfontSize] = useState("0")
 
  useEffect(() => {
    navBar.current.style.height = height;
    listElements.current.style.fontSize = fontSize;
  }, [height])

  function displayNavBar() {
    setHeight("44px");
    setfontSize("14px");
  }

  function hideNavBar() {
    setHeight("0");
    setfontSize("0");
  }

  return (
    <Router>
      <div className="nav_dropdown" onMouseEnter={displayNavBar} onMouseLeave={hideNavBar}>
        <nav ref={navBar}>
          <ul>
            <li className="li_dropdown" ref={listElements}>
              <Link to="/">Dashboard</Link>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}



export default App;