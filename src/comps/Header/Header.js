import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import styles from './Header.module.css'
import App from "../../pages/App"
import './Header.css';
import logo from '../../images/logo.svg';
import hamburger from '../../images/hamburger.svg';
import myHR from '../../images/myHR.svg';
import notifications from '../../images/notifications.svg';
import profile from '../../images/profile.svg';


function Header() {

    return (
        <>
        {/* <div className="nav">
            HEADER
        </div> */}

    <header className="nav">      
      <div className="navContent">
        <div className="content-items">
            <img src={hamburger} className="nav-icon" alt="logo" />
            <img src={logo} className="nav-logo" alt="logo" />
        </div>

        <div className="navMenu">
            <div className="content-items">
                <img src={myHR} className="nav-notification" alt="logo" />
                <img src={notifications} className="nav-logo" alt="logo" />
                <img src={profile} className="nav-profile" alt="logo" />
            </div>
        </div>
      </div>

      <div className="subNavContent">
        <div className="content-items">
            <h1 className="subNavTitle">My Docs</h1>
        </div>
        <div className="content-items">
            <ul className="navMenuItems">
                <li className="navMenuItem">Home </li>
                <li className="navMenuItem">Generate </li>
                <li className="navMenuItem">Career </li>
                <li className="navMenuItem">Hire </li>
                <li className="navMenuItem">Interview Process </li>
            </ul>
        </div>
      </div>
    </header>  

            {/* <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/" element={<App />} />
                </Routes>
            </BrowserRouter> */}
        </>
    );
}

export default Header;


