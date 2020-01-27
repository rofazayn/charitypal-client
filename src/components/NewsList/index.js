import React, { useEffect, useState } from 'react';
import { Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import NewsItem from '../NewsItem';

const NewsList = () => {
  const newsUrl = `https://newsapi.org/v2/everything?q=charity&apiKey=01b1e9e43b2f4868a6bf9402a4137383`;
  const perPage = 4;

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(newsUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setNews(data.articles);
      });
  }, [newsUrl]);

  return (
    <Grid container spacing={10} className='news'>
      {news.slice(0, perPage).map((article, key) => (
        <NewsItem key={key} article={article} />
      ))}
      <Divider style={{ width: '100%' }} />
      <Grid item className='news__loader'>
        <CircularProgress color='primary' />
        <Typography variant='body2'>Loading more charity news...</Typography>
      </Grid>
    </Grid>
  );
};

export default NewsList;
