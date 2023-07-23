// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import '../styles/styles.css'; // Import the styles
import Head from './Head';

const App = () => {
  return (
    <Router>
      <div>
      <Head />
        <nav>
          <ul>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">Calculator</Link>
            </li>
            <li>
              <Link to="/contact">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/contact' element={<ContactPage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
