import React,{useState,useEffect} from 'react';
import '../styles/MaskButton.css';

const ConnectWallet = () => {
    
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState('');

    useEffect(() => {
      connectToMetaMask();
    }, []);

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
            {connected ? (<p className="custom-text">{account}</p>) 
                        : (<button className="custom-button" onClick={connectToMetaMask}>Metatmask</button>)}
        </div>
  );
  };
  
  export default ConnectWallet;