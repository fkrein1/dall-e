import { useEffect, useState } from 'react';

const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

      setReachedBottom(hasReachedBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return reachedBottom;
};

export default usePageBottom;
