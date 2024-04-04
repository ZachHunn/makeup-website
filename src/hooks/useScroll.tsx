import { useEffect, useState } from 'react';
import useSSR from 'use-ssr';

export const useScroll = () => {
  const { isBrowser } = useSSR();
  const [lastScrollTop, setLastScroll] = useState<number>(0);
  const [bodyOffset, setBodyOffset] = useState(
    isBrowser ? document.body.getBoundingClientRect() : { top: 0, left: 0 },
  );
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | null>(
    null,
  );

  const listener = (e: Event) => {
    isBrowser && setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScroll(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
};
