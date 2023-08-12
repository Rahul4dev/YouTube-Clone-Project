import React from 'react';

const VideoCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="shadow-lg rounded-lg  p-2 w-72 m-2 bg-[#ebe9e9]">
      <img
        src={data.snippet.thumbnails.high.url}
        alt={data.snippet.title}
        className="rounded-lg"
      />
      <ul className="ml-4">
        <li className="font-bold text-[12px] mb-1">{data.snippet.title}</li>
        <li className="font-bold text-[12px] mb-1 text-blue">
          {data.snippet.channelTitle}
        </li>
        <li className="text-[8px]">{data.statistics.viewCount} views</li>
        <li className="text-[8px]">{data.statistics.likeCount} likes</li>
      </ul>
    </div>
  );
};

export const AdvertCard = ({ info }) => {
  return (
    <div className="border border-red rounded-lg">
      <VideoCard data={info} />
    </div>
  );
};

export default VideoCard;
