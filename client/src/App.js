import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li styles="display:flex; justify-content: space-inbetween">
            <Link to="/">Dashboard</Link>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}



export default App;