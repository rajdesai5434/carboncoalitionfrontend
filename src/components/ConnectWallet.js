import React,{useState} from 'react';
import '../styles/MaskButton.css';
const ethers = require("ethers")

const ConnectWallet = () => {
    
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState('');
    // Function to connect to MetaMask
    const connectToMetaMask = async () => {
        try {
          // Check if MetaMask is installed
          if (window.ethereum) {
            // Request accounts from MetaMask
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
            setConnected(true);
          } else {
            console.error('Please install MetaMask to connect.');
          }
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      };

    return (
        <div className='button-container'>
            {connected ? (<p className="custom-text">Connected with account: {account}</p>) 
                        : (<button className="custom-button" onClick={connectToMetaMask}>Connect To Metatmask</button>)}
        </div>
  );
  };
  
  export default ConnectWallet;