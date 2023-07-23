// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PortfolioPage from './PortfolioPage';
import ProfilePage from './ProfilePage';
import CalculatorPage from './CalculatorPage';
import '../styles/styles.css'; // Import the styles
import Head from './Head';
import ConnectWallet from './ConnectWallet';

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
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <ConnectWallet/>
        <Routes>
          <Route path='/' element={<PortfolioPage/>}></Route>
          <Route path='/calculator' element={<CalculatorPage/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
