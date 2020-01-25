import React from 'react';
import { Styled } from './style';
import { Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Styled.Home>
      <Container>
        <Typography variant='h3'>Home</Typography>
      </Container>
    </Styled.Home>
  );
};

export default Home;
