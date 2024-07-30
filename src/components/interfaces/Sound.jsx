import { useDispatch, useSelector } from 'react-redux';
import { setSound } from '../redux/pageSlice';

export const Sound = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  // Sound toggle
  const toggleSound = () => {
    dispatch(setSound());
  };

  return (
    <div className='sound-container'>
      <div className='sound-bar' onClick={() => toggleSound()}>
        {Array.from({ length: 10 }).map((_, idx) => {
          return <div key={idx} className={`bar ${page.sound ? 'bar-wave' : ''}`} />;
        })}
      </div>
    </div>
  );
};
