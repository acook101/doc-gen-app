import React from 'react';
import Header from '../comps/Header/Header'
import HomeSearch from '../comps/HomeSearch/HomeSearch';

function Home() {
  return (
    <div className="App">
      <Header/>  
      <HomeSearch/>
      
      AtoZ Home Page<br />
      <a href="/Editor">To the Editor!</a>
    </div>
  );
}

export default Home;