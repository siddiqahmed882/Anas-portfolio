import { Link } from 'react-router-dom';
import { useRef } from 'react';

import React from 'react';

const Navbar = () => {
  const hamburger = useRef();
  const toggleHamburgerAndShowNavLinks = () => {
    const navItems = document.querySelector('.nav__items');
    if (hamburger.current.classList.contains('menu-active')) {
      hamburger.current.classList.remove('menu-active');
      navItems.style.maxHeight = '';
      setTimeout(() => (navItems.style.display = ''), 500);
    } else {
      hamburger.current.classList.add('menu-active');
      navItems.style.display = 'flex';
      navItems.style.maxHeight = `${navItems.scrollHeight}px`;
    }
  };

  return (
    <header className='header'>
      <div className='container'>
        <nav className='navbar'>
          <div className='logo'>
            <strong>Shaykh Anas</strong>
            <span> / </span>
            <span>Frontend Developer</span>
          </div>
          <button
            ref={hamburger}
            className='hamburger'
            onClick={toggleHamburgerAndShowNavLinks}
          >
            <span className='inner'></span>
          </button>
          <ul className='nav__items'>
            <li className='nav__item'>
              <Link className='nav__link' to='/'>
                About me
              </Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='/projects'>
                Projects
              </Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
