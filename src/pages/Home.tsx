import React from 'react';
import Header from '../comps/Header/Header';
import Nav from '../comps/Nav/Nav';
import HomeSearch from '../comps/HomeSearch/HomeSearch';
import homeBottom from '../../images/home-bottom.png';

function Home() {
  return (
    <div className="App">
      <div className="Home">
        <Nav/>  
        <HomeSearch/>
        <div className="home-bottom"></div>
      </div>
    </div>
  );
}

export default Home;