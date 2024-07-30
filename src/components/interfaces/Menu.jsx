import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, setAnimateSection, setMenu } from '../redux/pageSlice';
import { useEffect, useRef } from 'react';

export const Menu = () => {
  const isAnimating = useRef(false);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  // Menu close by action
  useEffect(() => {
    dispatch(closeMenu(false));
  }, [page.animateSection]);

  // Menu toggle
  const toggleMenu = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    dispatch(setMenu());
    const timer = setTimeout(() => {
      isAnimating.current = false;
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <>
      <button className='menu-button' onClick={() => toggleMenu()}>
        <div className={`menu-line ${page.menu ? 'menu-line-first' : ''}`} />
        <div className={`menu-line ${page.menu ? 'menu-line-second' : ''}`} />
        <div className={`menu-line ${page.menu ? 'menu-line-third' : ''}`} />
      </button>
      <div className={`menu-container ${page.menu ? 'w-20r' : ''}`}>
        <div className='menu-list'>
          <MenuButton label={'About'} onClick={() => dispatch(setAnimateSection(0))} />
          <MenuButton label={'Skills'} onClick={() => dispatch(setAnimateSection(1))} />
          <MenuButton label={'Projects'} onClick={() => dispatch(setAnimateSection(2))} />
          <MenuButton label={'Contact'} onClick={() => dispatch(setAnimateSection(3))} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button className='menu-option' onClick={onClick}>
      {label}
    </button>
  );
};
