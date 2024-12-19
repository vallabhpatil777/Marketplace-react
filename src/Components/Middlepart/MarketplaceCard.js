import React from 'react';
import './MarketplaceCard.css'; 
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import bar from '../../assets/bar.png';
import { useNavigate } from 'react-router-dom';


const MarketplaceCard = () => {
  const navigate = useNavigate();


  

  const collections = [
    {
      image: image4,
      imageName: 'Night Sky',
      price: '120 NTF',
      priceRange: 'Price Range : 0.12BTC - 0.18BTC',
      info: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...',
      userAvatar: user1,
      userCategory: 'Artist',
      userName: 'Lea Jacquot',
    },
    {
      image: image3,
      imageName: 'Future',
      price: '120 NTF',
      priceRange: 'Price Range : 0.12BTC - 0.18BTC',
      info: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...',
      userAvatar: user2,
      userCategory: 'Artist',
      userName: 'Julien',
    },
    {
      image: image2,
      imageName: 'Mother nature',
      price: '120 NTF',
      priceRange: 'Price Range : 0.12BTC - 0.18BTC',
      info: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...',
      userAvatar: user3,
      userCategory: 'Artist',
      userName: 'Maria',
    },
  ];

  return (
    <div className='marketplace-container'>
     
      <img src={bar} alt="bar" className="bar" />
      <div className="marketplace-card">
       
        <div className="marketplace-card-left">
          <div className="trending-label">
            <span className='trending-now'>Trending Now</span>
          </div>
          <div className="image-category">Night Sky Collection</div>
          <div className="image-name">With the stars</div>

          
          <div className="avatar-container">
            <img src={user1} alt="User Avatar" className="avatar" />
            <div className="user-account">
              <span>Artist</span> 
              <div className="user-name">Lea Jaqueot</div> 
            </div>
          </div>

      
          <div className="buttons-container">
            <button className="button">Buy</button>
            <button className="button" onClick={() => navigate('/collection')}>See Collection</button>
          </div>
        </div>

      
        <div className="marketplace-card-right">
          <img
            src={image1}
            alt="Marketplace"
            className="marketplace-image"
          />
        </div>
      </div>


      <h2 className="collections-title">Collections</h2>
      <div className="collections-container">
        {collections.map((collection, index) => (
          <div className="collection-card" key={index}>
            <img
              src={collection.image}
              alt={collection.imageName}
              className="collection-image"
            />
            <div className="collection-details">
              <div className="collection-header">
                <h3 className="collection-name">{collection.imageName}</h3>
                <span className="collection-price">{collection.price}</span>
              </div>
              <div className="price-range">{collection.priceRange}</div>
              <div className="collection-info">{collection.info}</div>
              <div className="collection-user">
                <img
                  src={collection.userAvatar}
                  alt="User Avatar"
                  className="user-avatar"
                />
                <div className="user-details">
                  <span className="user-category">{collection.userCategory}</span>
                  <div className="user-name">{collection.userName}</div>
                </div>
              </div>
            </div>
            <button className="hover-button" onClick={() => navigate('/collection')}>
            Go to collection →
      </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketplaceCard;
