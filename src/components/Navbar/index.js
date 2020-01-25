import React from 'react';
import { Styled } from './style';
import { Container } from '@material-ui/core';

const Navbar = () => {
  return (
    <Styled.Navbar>
      <Container>
        <div className='navbar__inner'>
          <div className='navbar__logo'>
            <a href='/'>CharityPal.</a>
          </div>
          <div className='navbar__menu'>
            <ul>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/'>News</a>
              </li>
              <li>
                <a href='/'>Success stories</a>
              </li>
              <li>
                <a href='/'>Donate</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Styled.Navbar>
  );
};

export default Navbar;
