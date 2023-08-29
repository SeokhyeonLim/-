import React from 'react';
import Banner from './Banner';
import VirtualDom from './VirtualDom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <VirtualDom />
      
    </div>
  );
}

export default Home;
