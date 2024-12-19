import React from 'react';
import user1 from '../../assets/user1.png';
import image1 from '../../assets/image1.png';

import { useNavigate } from 'react-router-dom';
import { collections } from '../../data/Collections.js';
import './CollectionPage.css';


const CollectionPage = ({ onBuyNFT, isWalletConnected }) => {
    const navigate = useNavigate();
  
    const handleBuy = (nft) => {
      if (isWalletConnected) {
        
        onBuyNFT(nft); 
      } else {
        
        navigate('/connect-wallet');
      }
    };

  return (
    <div className='collection-container-main'>
      
      
      <div className="collection-card-main">
        
        <div className="collection-card-left">
          <div className="trending-label">
            <span className='trending-now'>Trending Now</span>
          </div>
          <div className="image-category">Collection</div>
          <div className="image-name">Night Sky</div>
          <p className="image-info">Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo</p>
          
          <div className="avatar-container">
            <img src={user1} alt="User Avatar" className="avatar" />
            <div className="user-account">
              <span>Artist</span> 
              <div className="user-name">Lea Jaqueot</div> 
            </div>
          </div>
        </div>

       
        <div className="collection-card-right">
          <img
            src={image1}
            alt="collection"
            className="collection-card-image"
          />
        </div>
      </div>

     
      <h2 className="collections-page-title">NFTs</h2>
      <div className="collections-page-container">
        {collections.map((collection, index) => (
          <div className="collection-page-card" key={index}>
            <img
              src={collection.image}
              alt={collection.imageName}
              className="collection-page-image"
            />
            <div className="collection-page-details">
              <div className="collection-page-header">
                <h3 className="collection-page-name">{collection.imageName}</h3>
                <span className="collection-page-price">{collection.price}</span>
              </div>
            </div>
            <button
              className="collection-hover-button"
              onClick={() => handleBuy(collection)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
