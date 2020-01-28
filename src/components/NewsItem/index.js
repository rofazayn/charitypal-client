import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import CPButton from '../layout/CPButton';
import { ReactComponent as ArrowUpRight } from '../../assets/icons/arrow-up-right.svg';
import { Styled } from './style';

const NewsItem = ({ article: { title, content, urlToImage, url } }) => {
  return (
    <Styled.NewsItem item className='news__item'>
      <div className='inner'>
        <Grid
          container
          spacing={10}
          alignItems='center'
          justify='space-between'
        >
          <Grid item md={6} className='thumbnail'>
            <img src={urlToImage} alt='News' />
          </Grid>
          <Grid item md={6} className='info'>
            <Typography variant='h5' className='info__title'>
              {title && `${title.slice(0, 60)}...`}
            </Typography>
            <Typography variant='body1' className='info__paragraph'>
              {content && `${content.slice(0, 150)}...`}
            </Typography>
            <CPButton
              className='text-button'
              endIcon={<ArrowUpRight />}
              target='_blank'
              href={url}
            >
              Continue reading
            </CPButton>
          </Grid>
        </Grid>
      </div>
    </Styled.NewsItem>
  );
};

export default NewsItem;
