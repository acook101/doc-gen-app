import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import styles from './Header.module.css'
import App from "../../pages/App"
import './Header.scss';
import logo from '../../images/logo.svg';
import EditorTools from '../EditorToolbar/EditorToolbar';


function EditorHeader() {
    return (
      <header className="header">      
        <div className="headerContent">
          <div className="content-items">
              <a href="/"><img src={logo} className="nav-logo" alt="logo" /></a>
              <ul className="breadcrumbs">
                <li className="breadcrumbs__item">My Docs</li>
                <li className="breadcrumbs__item breadcrumbs__item--current">New Document</li>
                <li className="breadcrumbs__item breadcrumbs__item--badge">PRFAQ</li>
              </ul>
          </div>
        </div>
        <EditorTools/>
      </header>  
    );
}

export default EditorHeader;


