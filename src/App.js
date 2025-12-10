import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Reading from './pages/reading';
import TenCards from './pages/tenCards';
import Memory from './pages/memory';
import Cards from './pages/cards';
import Reading3 from './pages/reading3';
import Reading10 from './pages/reading10';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/" onClick={handleNavClick}>
            Obsidian Tarot
          </Link>

          {/* React toggle */}
          <button 
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* React collapse */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav me-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleNavClick}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/reading3" onClick={handleNavClick}>Three Card Reading</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/tenCards" onClick={handleNavClick}>Ten Card Reading</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/memory" onClick={handleNavClick}>Memory Game</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cards" onClick={handleNavClick}>Card Meanings</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/tenCards" element={<TenCards />} />
        <Route path="/reading3" element={<Reading3 />} />
        <Route path="/reading10" element={<Reading10 />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
}
export default App;