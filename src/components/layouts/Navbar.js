import React, { useState } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [hamburgerIconClicked, setHamburgerIconClicked] = useState(false)
  const toggleHamburgerIcon = (e) => {
    setHamburgerIconClicked(!hamburgerIconClicked)
  }
  return (
    <>
      <nav-anodiam>
        <Logo/>
        <div>
          <ul id='navbar' className={hamburgerIconClicked ? '#navbar active' : '#navbar'} onClick={toggleHamburgerIcon} >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="profile">My Profile</NavLink></li>
            <li><NavLink to="courses">My Courses</NavLink></li>
            <li><NavLink to="signup">Sign Up</NavLink></li>
            <li><NavLink to="signin">Login</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
          </ul>
        </div>
        <div id="mobile">
          <i id="bar" className={hamburgerIconClicked ? 'fas fa-times' : 'fas fa-bars'} onClick={toggleHamburgerIcon} ></i>
        </div>
      </nav-anodiam>
    </>
  );
}
 
export default Navbar;