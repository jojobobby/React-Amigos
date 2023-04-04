import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BensPage from "./BensPage";
import AngelosPage from "./AngelosPage";
import DemariasPage from "./DemariasPage";
import EstrellasPage from "./EstrellasPage";
import LizsPage from "./LizsPage";
import RalphsPage from "./RalphsPage";
import SammysPage from "./SammysPage";


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li styles="display:flex; justify-content: space-inbetween">
            <Link to="/BensPage">Lil Huncho's Page</Link>
            <Link to="/AngelosPage">Swipper's Page</Link>
            <Link to="/DemariasPage">Damaria's Page</Link>
            <Link to="/EstrellasPage">Starsii's Page</Link>
            <Link to="/LizsPage">Liz's Page</Link>
            <Link to="/RalphsPage">RJ's Page</Link>
            <Link to="/SammysPage">Sosa's Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/BensPage" element={<BensPage />} />
        <Route path="/AngelosPage" element={<AngelosPage />} />
        <Route path="/DemariasPage" element={<DemariasPage />} />
        <Route path="/EstrellasPage" element={<EstrellasPage />} />
        <Route path="/LizsPage" element={<LizsPage />} />
        <Route path="/RalphsPage" element={<RalphsPage />} />
        <Route path="/SammysPage" element={<SammysPage />} />
      </Routes>
    </Router>
  );
}



export default App;