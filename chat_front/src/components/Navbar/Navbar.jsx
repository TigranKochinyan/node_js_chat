import React from 'react';
import './navbar.scss';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarContainer_left">
        <Link to="/" className="navbarContainer_left-logo">Social App</Link>
      </div>
      <div className="navbarContainer_center">
        <div className="navbarContainer_center-searchBar">
          <Search className="navbarContainer_center-searchBar_icon"/>
          <input placeholder="Search for friends, post or video" type="text" className="navbarContainer_center-searchBar_input"/>
        </div>
      </div>
      <div className="navbarContainer_right">
        <div className="navbarContainer_right-links">
          <NavLink to="/" className="navbarContainer_right-links_link">Homepage</NavLink>
          <span className="navbarContainer_right-links_link">Timeline</span>
        </div>
        <div className="navbarContainer_right-icons">
          <div className="navbarContainer_right-icons_icon">
            <Person />
            <span className="navbarContainer_right-icons_icon-badge">1</span>
          </div>
          <div className="navbarContainer_right-icons_icon">
            <Chat />
            <span className="navbarContainer_right-icons_icon-badge">2</span>
          </div>
          <div className="navbarContainer_right-icons_icon">
            <Notifications />
            <span className="navbarContainer_right-icons_icon-badge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="Profile" className="profilePicture" />
      </div>
    </div>
  )
}

export default Navbar;