import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnimateSection } from '../redux/pageSlice';
import gsap from 'gsap';

export const ScrollManager = () => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  data.fill.classList.add('scroll_adjustment');

  // Scroll animation from section 0 to 1
  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: data.el.clientHeight * page.animateSection,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [page.animateSection]);

  // Scroll animation detect
  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.offset;
      return;
    }

    const currentPage = Math.floor(data.offset * data.pages);

    if (data.offset > lastScroll.current && currentPage === 0) {
      dispatch(setAnimateSection(1));
    }

    if (data.offset < lastScroll.current && data.offset < 1 / (data.pages - 1)) {
      dispatch(setAnimateSection(0));
    }

    lastScroll.current = data.offset;
  });

  return null;
};
