import React from 'react';
import './HomeSearch.scss';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function HomeSearch() {
    return (
      <div className="home-search-wrapper">
        <div className="home-search">
          <h2>Good Morning, Adam!</h2>
          <input></input>
          <ul className="favorites">
            <li className="favorites__label">Favorites</li>
            <li className="favorites__item">Time Off</li>
            <li className="favorites__item">Wiki</li>
          </ul>
        </div>
      </div>
    );
}

export default HomeSearch;