import React from 'react';
import { Styled } from './style';
import { Container, Typography } from '@material-ui/core';

const Join = () => {
  return (
    <Styled.Join
      className='page'
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Typography variant='h3'>Join</Typography>
      </Container>
    </Styled.Join>
  );
};

export default Join;
