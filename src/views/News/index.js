import React from 'react';
import { Styled } from './style';
import { Container, Typography, Grid } from '@material-ui/core';
import CPButton from '../../components/layout/CPButton/index';
import { ReactComponent as NewsSvg } from '../../assets/svg/undraw_connected_world_wuay.svg';

const News = () => {
  return (
    <Styled.News className='page'>
      <Container>
        <Grid
          container
          spacing={10}
          alignItems='center'
          justify='space-between'
        >
          <Grid item lg={6} className='image'>
            <div className='custom-image'>
              <NewsSvg />
            </div>
          </Grid>
          <Grid item lg={6} className='hero'>
            <Typography variant='h4' className='hero__title'>
              Charity latest <span className='highlight'>news.</span>
            </Typography>
            <Typography variant='body1' className='hero__paragraph'>
              Latest voluntary sector news covering charity finance,
              fundraising, governance & trustees, management, communications &
              campaigning, charity law & regulation and social enterprise.
              Latest News & Analysis.
            </Typography>
            <div className='hero__buttons'>
              <CPButton variant='contained' color='primary'>
                Read more
              </CPButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Styled.News>
  );
};

export default News;
