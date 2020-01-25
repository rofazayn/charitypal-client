import React from 'react';
import { Styled } from './style';
import { Container, Divider } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Styled.Navbar>
      <Container>
        <div className='navbar__inner'>
          <div className='navbar__logo'>
            <Link to='/'>CharityPal.</Link>
          </div>
          <div className='navbar__menu'>
            <ul>
              <li>
                <NavLink to='/' exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/news'>News</NavLink>
              </li>
              <li>
                <NavLink to='/success-stories'>Success stories</NavLink>
              </li>
              <li>
                <NavLink to='/donate'>Donate</NavLink>
              </li>
              <Divider orientation='vertical' />
              <li>
                <NavLink to='/join'>Join us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Styled.Navbar>
  );
};

export default Navbar;
