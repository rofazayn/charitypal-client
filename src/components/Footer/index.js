import React from 'react';
import { Styled } from './style';
import { Container, Typography } from '@material-ui/core';
import UnicefImage from '../../assets/images/unicef-logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Styled.Footer>
      <Container>
        <div className='footer__inner'>
          <div className='footer__balance'>
            <span className='value'>$ 0.00</span>
            <Typography variant='body2'>gathered so far</Typography>
          </div>
          <div className='footer__sponsors'>
            <Typography variant='body2'>Not sponsored by</Typography>
            <img src={UnicefImage} alt='Unicef' style={{ width: 120 }} />
          </div>
          <div className='footer__legal'>
            <ul>
              <li>
                <Link to='/'>Privacy</Link>
              </li>
              <li>
                <Link to='/'>Cookies</Link>
              </li>
              <li>
                <a
                  href='https://github.com/rofazayn/CharityPal'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Styled.Footer>
  );
};

export default Footer;
