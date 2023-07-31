// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PortfolioPage from './PortfolioPage';
import CarbonProjects from './CarbonProjects';
import CalculatorPage from './CalculatorPage';
import '../styles/styles.css'; // Import the styles
import Head from './Head';
import ConnectWallet from './ConnectWallet';
import { ethers } from "ethers";

const App = () => {

  const [signer, setSigner] = useState(null);
  const [acc, setAcc] = useState(null);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const acc = await signer.getAddress();
      setSigner(signer);
      setAcc(acc);
  };
}

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
              <Link to="/projects">Carbon Projects</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<PortfolioPage/>}></Route>
          <Route path='/calculator' element={<CalculatorPage/>}></Route>
          <Route path='/projects' element={<CarbonProjects/>}></Route>
        </Routes>
        <ConnectWallet/>
      </div>
    </Router>
  );
};

export default App;
