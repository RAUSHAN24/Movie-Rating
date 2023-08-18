import React from 'react';
import "./style.scss";
import Banner from './banner/banner';
import Trending from './trending/Trending.jsX';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';

// banner

const Home = () => {
  return (
    <div className="homePage">
      <Banner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    
    </div>
  )
}

export default Home
