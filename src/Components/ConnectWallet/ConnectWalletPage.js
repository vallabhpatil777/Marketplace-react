import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConnectWalletPage.css'; 

const ConnectWalletPage = ({ setIsWalletConnected }) => {
  const navigate = useNavigate();

  
  const connectWallet = () => {
    setIsWalletConnected(true); 
    navigate('/');
  };

  return (
    <div className="connect-wallet-container">
      <h2>Choose the wallet to connect</h2>
      <div className="rectangles-container">
        <div 
          className="wallet-rectangle" 
          onClick={connectWallet}
        >
          Wallet 1
        </div>
        <div 
          className="wallet-rectangle" 
          onClick={connectWallet}
        >
          Wallet 2
        </div>
        <div 
          className="wallet-rectangle" 
          onClick={connectWallet}
        >
          Wallet 3
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPage;
