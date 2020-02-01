import React, { useState } from 'react';
import { Styled } from './style';
import { Container, Typography, Grid } from '@material-ui/core';
import CPButton from '../../components/layout/CPButton/index';
import { ReactComponent as NewsSvg } from '../../assets/svg/undraw_connected_world_wuay.svg';
import NewsList from '../../components/NewsList';

const News = () => {
  const [allNews, setAllNews] = useState([]);
  const initialLoadNews = async () => {
    try {
      const fetchedNews = await fetch(
        'https://newsapi.org/v2/everything?q=charity&sortby=relevancy&apiKey=01b1e9e43b2f4868a6bf9402a4137383'
      );
      const parsedNews = await fetchedNews.json();
      setAllNews(parsedNews.articles);
    } catch (error) {
      console.log('Error fetching news');
    }
  };

  return (
    <Styled.News
      className='page'
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Container>
        <Grid
          container
          spacing={10}
          alignItems='center'
          justify='space-between'
        >
          <Grid item md={6} className='image'>
            <div className='custom-image'>
              <NewsSvg />
            </div>
          </Grid>
          <Grid item md={6} className='hero'>
            <Typography variant='h4' className='hero__title'>
              Charity latest <span className='highlight'>news.</span>
            </Typography>
            <Typography variant='body1' className='hero__paragraph'>
              Latest voluntary sector news covering charity finance,
              fundraising, governance & trustees, management, communications &
              campaigning, charity law & regulation and social enterprise.
              Latest News & Analysis.
            </Typography>
            {!allNews.length > 0 && (
              <div className='hero__buttons'>
                <CPButton
                  variant='contained'
                  color='primary'
                  onClick={initialLoadNews}
                >
                  Let's read the news
                </CPButton>
              </div>
            )}
          </Grid>
        </Grid>
        {allNews.length > 0 && <NewsList allNews={allNews} />}
      </Container>
    </Styled.News>
  );
};

export default News;
