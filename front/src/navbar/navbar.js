import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nisa from './nisa.jpeg'
import { useAuth0 } from '../auth0-wrapper'

import './navbar.scss';
import { redirectUri } from '../index';

const DesktopNav = () => {
  const { user , logout} = useAuth0();

  return(
    <div className="subNav">
      <div className="subNav__menu">
      <h3 className="nav-h3">Hello {user ? user.name : ''}</h3>
      <button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectUri})}>Log Out</button>
      </div>
    </div>
  )
}


const MobileDropdown = ({ open, setOpen, logout }) => {
  return (
    <div className={`nav__mobile-dropdown${open ? " open" : ""}`}>
      <ul>
        <li><NavLink to="/projectlist" exact className="notification_link" onClick={() => setOpen(false)}>Project List</NavLink></li>
        <li><button className="nav__btn nav__btn--logout" onClick={() => logout({returnTo: redirectUri})}>Log Out</button></li>
      </ul>
    </div>
  )
}

const NavBar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [open, setOpen] = React.useState(false); // Used for displaying and hiding the dropdown

  return (
    <>
      <nav className="nav">
        <Link to="/" onClick={() => setOpen(false)}><img src={Nisa} style ={{width: "50px", height:"50px"}} alt="Nisa" className="nav__logo" /></Link>
        <div className="nav__mobile-menu">

        </div>
        <div className={`nav__menu${open ? " open" : " closed"}`}>
          {!isAuthenticated && (
              <button className="nav__btn nav__btn--login" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )}

          {isAuthenticated && user && (
              <>
                <img className="nav__avatar" src={user.picture} alt="User avatar" width="50" />
                {<DesktopNav/>}
                <img className="nav_dropdownIconOpen" src='/arrow-down.svg' alt="dropdown open" onClick={() => setOpen(true)} />
                <img className="nav_dropdownIconClose" src='/close-button.svg' alt="dropdown close" onClick={() => setOpen(false)} />
                <img className="nav__mobile-menu-btn" src='/Menu-button.svg' alt="mobile menu" width="32" onClick={() => setOpen(!open)} />
              </>
            )}
        </div>
      </nav>
      <MobileDropdown open={open} setOpen={setOpen} logout={logout}/>
      {isAuthenticated }
    </>
  );
};

export default NavBar;