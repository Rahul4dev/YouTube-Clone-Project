import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, { AdvertCard } from './Shared/VideoCard';
import ButtonList from './ButtonList';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const info = {
    snippet: {
      title: 'Advertisement Video',
      thumbnails: {
        high: { url: '/assets/YouTube-Icon-Full-Color-Logo.wine.svg' },
      },
    },
    statistics: {
      viewCount: 232343,
      likeCount: 23421,
    },
  };

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    if (!response.ok) {
      return alert(response.status);
    }
    const data = await response.json();

    setVideos(data.items);
  };
  return (
    <>
      <ButtonList />
      <div className="flex flex-wrap ">
        {videos && <AdvertCard info={info} />}
        {videos.map((video) => (
          <Link to={'/watch?v=' + video.id} key={video.id}>
            <VideoCard data={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;
