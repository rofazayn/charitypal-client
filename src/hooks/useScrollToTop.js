import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  // Scroll to top on route change
  const app = useRef();
  const { pathname } = useLocation();
  const { search } = useLocation();
  useEffect(() => {
    app.current.scrollIntoView(true);
  }, [pathname, search]);

  return { app };
};

export default useScrollToTop;
