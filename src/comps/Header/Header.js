import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import styles from './Header.module.css'
import App from "../../pages/App"
import './Header.scss';
import logo from '../../images/logo.svg';
import hamburger from '../../images/hamburger.svg';
import myHR from '../../images/myHR.svg';
import notifications from '../../images/notifications.svg';
import profile from '../../images/profile.svg';


function EditorHeader() {
    return (
      <header className="nav">      
        <div className="navContent">
          <div className="content-items">
              <a href="/"><img src={logo} className="nav-logo" alt="logo" /></a>
          </div>

        </div>
      </header>  
    );
}

export default EditorHeader;


