import React from 'react';
import { Styled } from './style';
import { Container, Typography } from '@material-ui/core';

const SuccessStories = () => {
  return (
    <Styled.SuccessStories className='page'>
      <Container>
        <Typography variant='h3'>Success stories</Typography>
      </Container>
    </Styled.SuccessStories>
  );
};

export default SuccessStories;
