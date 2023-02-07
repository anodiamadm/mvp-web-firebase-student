import React, { useState } from 'react';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import SearchBar from '../uiLegos/SearchBar';

const Navbar = () => {
  const [hamburgerIconClicked, setHamburgerIconClicked] = useState(false)
  const toggleHamburgerIcon = (e) => {
    setHamburgerIconClicked(!hamburgerIconClicked)
  }
  const {user, logOut} = useUserAuth()
  const handleLogOut = async () => {
    try {
      await logOut()
    } catch(err) {
      console.log('ERROR', err);
    }
  }
  return (
    <>
      <nav-anodiam>
        <Logo/>
        <div className='search-bar-alignment'>
          <SearchBar/>
        </div>
        <div className='main-menu-alignment'>
          <ul id='navbar' className={hamburgerIconClicked ? '#navbar active' : '#navbar'} onClick={toggleHamburgerIcon} >
            { user ?
              <>
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="profile">My Profile</NavLink></li>
                <li><NavLink to="courses">My Courses</NavLink></li>
                <li><NavLink to="/"><span onClick={handleLogOut}>Logout</span></NavLink></li>
              </>
            :
              <>
                <li><NavLink to="signup">Sign Up</NavLink></li>
                <li><NavLink to="/">Login</NavLink></li>
              </>
            }
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