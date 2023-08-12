import { Icon } from '@iconify/react';
import React from 'react';

function LeftBar() {
  return (
    <div className="w-10 flex flex-col items-center h-64">
      <>
        <Icon icon={'majesticons:home'} height={26} width={26} />
        <p>Home</p>
      </>
      <>
        <Icon icon={'mdi:youtube-subscription'} height={26} width={26} />
        <p>Subscription</p>
      </>
      <>
        <button className={``}>
          <img
            src="../assets/youtube-shorts-icon.svg"
            alt="shorts"
            className="w-7 h-7 mr-2"
          />
          <p>Shorts</p>
        </button>
      </>
      <>
        <Icon icon={'ic:sharp-video-library'} height={26} width={26} />
        <p>Library</p>
      </>

      {/* <Icon  /> */}

      <br />
    </div>
  );
}

export default LeftBar;
