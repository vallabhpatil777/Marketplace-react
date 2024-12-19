import React, { useState } from 'react';
import './Navbar.css';
import leftIcon from '../../assets/lefticon.png';
import SigninIcon from '../../assets/Sign_in.png';

const Navbar = ({ isWalletConnected, userNFTs }) => {
  const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);

  const toggleAccountPanel = () => {
    setIsAccountPanelOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">MARKETPLACE.</span>
      </div>
      <div className="navbar-right">
        {!isAccountPanelOpen ? (
          <button
            className="connect-wallet"
            onClick={isWalletConnected ? toggleAccountPanel : null}
          >
            {isWalletConnected ? 'Account' : 'Connect Wallet'}
          </button>
        ) : (
          <div className='account-box'>
            <button className="long-back-button" onClick={toggleAccountPanel}></button>
            <div className="account-panel-card">
              <div className="account-panel-header">
                <img src={leftIcon} alt="Left Icon" className="account-panel-image-left" />
                <img src={SigninIcon} alt="Right Icon" className="account-panel-image-right" />
              </div>
              <div className="account-panel-content">
                <div className='account-balance'>
                  <span className='span-text'>In your wallet</span>
                  <p>0.129 BTC</p>
                </div>
                <p className='nft-title-text'>Your NFTs</p>
                <div className="nft-container">
                  {userNFTs.length > 0 ? (
                    userNFTs.map((nft, index) => (
                      <div className="nft-item" key={index}>
                        <img src={nft.image} alt={nft.imageName} className="nft-image" />
                      </div>
                    ))
                  ) : (
                    <p className="no-nfts">You don't own any NFTs yet</p>
                  )}
                </div>
                {userNFTs.length === 0 && (
                  <button
                    className="start-shopping-button"
                    onClick={toggleAccountPanel}
                  >
                    Start shopping
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
