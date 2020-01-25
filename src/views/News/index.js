import React from 'react';
import { Styled } from './style';
import { Container, Typography } from '@material-ui/core';

const News = () => {
  return (
    <Styled.News>
      <Container>
        <Typography variant='h3'>News</Typography>
      </Container>
    </Styled.News>
  );
};

export default News;
