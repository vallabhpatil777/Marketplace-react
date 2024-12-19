import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar.js'; 
import MarketplaceCard from './Components/Middlepart/MarketplaceCard.js';
import ConnectWalletPage from './Components/ConnectWallet/ConnectWalletPage'; 
import Footer from './Components/Footer/Footer.js'; 
import CollectionPage from './Components/CollectionPage/CollectionPage.js'; 

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [userNFTs, setUserNFTs] = useState([]); 

  const handleBuyNFT = (nft) => {
   
    setUserNFTs((prevNFTs) => [...prevNFTs, nft]);
  };
  return (
    <Router> 
      <div className="App">
        <Navbar isWalletConnected={isWalletConnected} userNFTs={userNFTs}/> 
        
       
        <Routes>
          <Route path="/" element={<MarketplaceCard />} /> 
          <Route path="/connect-wallet" element={<ConnectWalletPage setIsWalletConnected={setIsWalletConnected}/>} />
          <Route path="/collection" element={<CollectionPage onBuyNFT={handleBuyNFT} isWalletConnected={isWalletConnected}/>} /> 
        </Routes>
        
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
