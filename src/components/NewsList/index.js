import React, {
  useEffect,
  useState,
  useReducer,
  useRef,
  useCallback
} from 'react';
import { Grid, Typography, Divider, CircularProgress } from '@material-ui/core';
import NewsItem from '../NewsItem';
import { Styled } from './style';

const NewsList = ({ allNews }) => {
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

  const [shouldSetRef, setShouldSetRef] = useState(false);

  useEffect(() => {
    if (allNews.length > 0) {
      setShouldSetRef(true);
    }

    return () => {
      setShouldSetRef(false);
    };
  }, [allNews]);

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
    }, 500);
  }, [after, allNews]);

  const loader = useRef(load);
  const [element, setElement] = useState(null);

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 0 }
    )
  );

  useEffect(() => {}, [observer, shouldSetRef]);

  useEffect(() => {
    if (shouldSetRef) {
      loader.current = load;

      return () => {
        loader.current = null;
      };
    }
  }, [load, shouldSetRef]);

  useEffect(() => {
    if (shouldSetRef) {
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
    }
  }, [element, shouldSetRef, observer]);

  return (
    <Styled.NewsList container spacing={10} className='news'>
      {data !== null &&
        data.map((article, key) => <NewsItem key={key} article={article} />)}
      {allNews.length > 0 && (more || loading) ? (
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
    </Styled.NewsList>
  );
};

export default NewsList;
