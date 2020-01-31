import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { search } = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({
        top: 0,
        left: 0
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}
