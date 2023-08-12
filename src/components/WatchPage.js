import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <div className="px-5">
      <iframe
        src={'https://www.youtube.com/embed/' + searchParams.get('v')}
        height="600"
        width="1200"
        allow="accelerometer; autoplay;"
        title="Marvel intro"
      ></iframe>
    </div>
  );
};

export default WatchPage;
