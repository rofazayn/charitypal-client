import React, {
  useEffect,
  useState,
  useReducer,
  useRef,
  useCallback
} from 'react';
import { Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import NewsItem from '../NewsItem';

const NewsList = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/everything?q=charity&sortby=relevancy&apiKey=01b1e9e43b2f4868a6bf9402a4137383'
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setAllNews(data.articles);
      });
  }, []);

  const newsReducer = (state, action) => {
    switch (action.type) {
      case 'start':
        return { ...state, loading: true };
      case 'loaded':
        return {
          ...state,
          loading: false,
          data: [...state.data, ...action.newData],
          more: action.newData.length === perPage,
          after: state.after + action.newData.length
        };

      default:
        return state;
    }
  };

  const perPage = 3;

  const [newsState, dispatch] = useReducer(newsReducer, {
    loading: false,
    more: true,
    data: [],
    after: 0
  });

  const { loading, data, after, more } = newsState;

  const load = useCallback(() => {
    dispatch({ type: 'start' });

    setTimeout(() => {
      const newData = allNews.slice(after, after + perPage);
      dispatch({ type: 'loaded', newData });
    }, 0);
  }, [after, allNews]);

  const loader = useRef(load);
  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.isIntersecting) {
          fetch(
            'https://newsapi.org/v2/everything?q=charity&sortby=relevancy&apiKey=01b1e9e43b2f4868a6bf9402a4137383'
          )
            .then(response => {
              return response.json();
            })
            .then(data => {
              setAllNews(data.articles);
              loader.current();
            });
        }
      },
      { threshold: 0 }
    )
  );
  const [element, setElement] = useState(null);

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <Grid container spacing={10} className='news'>
      {data !== null &&
        data.map((article, key) => <NewsItem key={key} article={article} />)}
      {more || loading ? (
        <>
          <Divider style={{ width: '100%' }} />
          <Grid item className='news__loader' ref={setElement}>
            <CircularProgress color='primary' />
            <Typography variant='body2'>
              Loading more charity news...
            </Typography>
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

export default NewsList;
