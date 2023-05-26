import React from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import './HomeSearch.scss';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function HomeSearch() {

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    navigate('/editor');
  };
  
  return (
    <div className="home-search-wrapper">
      <div className="home-search">
        <h2>Good Morning, Adam!</h2>
        <form onSubmit={handleSubmit}>
          <input className="home-search__field" placeholder="What do you want to do or find today?"></input>
        </form>
        <ul className="favorites">
          <li className="favorites__item favorites__label">Favorites:</li>
          <li className="favorites__item"><a href="/editor">Create New Doc</a></li>
          <li className="favorites__item"><a href="/">Wiki</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HomeSearch;