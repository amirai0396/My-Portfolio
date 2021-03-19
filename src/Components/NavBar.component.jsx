import React from 'react';
import displayPicture from '../images/displayPicture.jfif';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='NavBar'>
      <nav className='nav'>
        <div className='profile'>
          <img src={displayPicture} alt='' />
        </div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <NavLink to='/' exact activeClassName='active'>
              .home()
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' exact activeClassName='active'>
              .about()
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/skills' exact activeClassName='active'>
              .skills()
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/projects' exact activeClassName='active'>
              .projects()
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact' exact activeClassName='active'>
              .contact()
            </NavLink>
          </li>
        </ul>
        <footer className='footer'>
          <p>@2021 Ami Rai</p>
        </footer>
      </nav>
    </div>
  );
}
export default NavBar;
