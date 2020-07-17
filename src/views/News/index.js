import React, { useState } from 'react';
import { Styled } from './style';
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import CPButton from '../../components/layout/CPButton/index';
import { ReactComponent as NewsSvg } from '../../assets/svg/undraw_connected_world_wuay.svg';
import NewsList from '../../components/NewsList';
import { motion } from 'framer-motion';

const News = () => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  const [buttonLoading, setButtonIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [allNews, setAllNews] = useState([]);
  const initialLoadNews = async () => {
    setButtonIsLoading(true);
    setIsFetching(true);
    try {
      const fetchedNews = await fetch(
        `${proxyUrl}https://newsapi.org/v2/everything?q=charity&sortby=relevancy&apiKey=01b1e9e43b2f4868a6bf9402a4137383`,
        {
          headers: {
            origin: 'x-requested-with',
          },
        }
      );
      const parsedNews = await fetchedNews.json();
      console.log(parsedNews);
      if (parsedNews.articles && parsedNews.articles.length > 0) {
        setAllNews(parsedNews.articles);
        setButtonIsLoading(false);
        setIsFetching(false);
      }
    } catch (error) {
      setButtonIsLoading(false);
      setAllNews([]);
      setIsFetching(false);
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
              <motion.div
                initial={{ scale: 0.8 }}
                exit={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                <NewsSvg />
              </motion.div>
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
                  endIcon={
                    buttonLoading ? (
                      <CircularProgress color='primary' size={22} />
                    ) : null
                  }
                  disabled={isFetching}
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
