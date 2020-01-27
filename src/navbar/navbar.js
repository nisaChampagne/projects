import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nisa from './nisa.jpeg'


import './navbar.scss';

const DesktopNav = () => (
  <div className="subNav">
    <div className="subNav__menu">
    <li><NavLink to="/random" exact className="notification_link">Random</NavLink></li>
    <li><NavLink to="/drum" exact className="notification_link">Drum</NavLink></li>
    <li><NavLink to="/backgroundColor" exact className="notification_link">Background Color</NavLink></li>
    </div>
  </div>
)

const DesktopDropdown = ({ open, setOpen }) => {
  return (
    <div className={`nav__DesktopDropdown${open ? " open" : ""}`}>
      <ul>
        <li><NavLink to="/random" exact className="notification_link" onClick={() => setOpen(false)}>Random</NavLink></li>
        <li><NavLink to="/drum" exact className="notification_link" onClick={() => setOpen(false)}>Drum</NavLink></li>
        <li><NavLink to="/backgroundColor" exact className="notification_link" onClick={() => setOpen(false)}>Background Color</NavLink></li>
      </ul>
    </div>
  )
}

const MobileDropdown = ({ open, setOpen }) => {
  return (
    <div className={`nav__mobile-dropdown${open ? " open" : ""}`}>
      <ul>
        <li><NavLink to="/backgroundColor" exact className="notification_link" onClick={() => setOpen(false)}>Background Color</NavLink></li>
        <li><NavLink to="/random" exact className="notification_link" onClick={() => setOpen(false)}>Random</NavLink></li>
        <li><NavLink to="/drum" exact className="notification_link" onClick={() => setOpen(false)}>Drum</NavLink></li>
      </ul>
    </div>
  )
}

const NavBar = () => {
  const [open, setOpen] = React.useState(false); // Used for displaying and hiding the dropdown

  return (
    <>
      <nav className="nav">
        <Link to="/" onClick={() => setOpen(false)}><img src={Nisa} style ={{width: "40px", height:"40px"}} alt="Nisa" className="nav__logo" /></Link>
        <div className="nav__mobile-menu">

        </div>
        <div className={`nav__menu${open ? " open" : " closed"}`}>

              <>
                {<DesktopNav/>}
                <img className="nav_dropdownIconOpen" src='/arrow-down.svg' alt="dropdown open" onClick={() => setOpen(true)} />
                <img className="nav_dropdownIconClose" src='/close-button.svg' alt="dropdown close" onClick={() => setOpen(false)} />
                <img className="nav__mobile-menu-btn" src='/Menu-button.svg' alt="mobile menu" width="32" onClick={() => setOpen(!open)} />
                <DesktopDropdown open={open}/>
              </>
        </div>
      </nav>
      <MobileDropdown open={open} setOpen={setOpen} />
    </>
  );
};

export default NavBar;