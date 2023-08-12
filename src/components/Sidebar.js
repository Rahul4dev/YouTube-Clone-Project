import React from 'react';
import IconButton from './Shared/IconButton';
import LogoSection from './Shared/LogoSection';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="absolute bg-black w-screen h-screen bg-opacity-50">
      <div className=" bg-white w-60 ">
        <LogoSection />

        <IconButton title={'Home'} icon={'majesticons:home'} linkTO={'/'} />
        <IconButton title={'Shorts'} />
        <IconButton title={'Subscriptions'} icon={'mdi:youtube-subscription'} />
        <br />
        <IconButton title={'Library'} icon={'ic:sharp-video-library'} />
        <IconButton title={'History'} icon={'solar:history-bold'} />
        <IconButton title={'Your videos'} icon={'mdi:play-box'} />
        <IconButton title={'Watch later'} icon={'carbon:time'} />
        <IconButton title={'Liked videos'} icon={'iconamoon:like-thin'} />
        <IconButton title={'Show more'} icon={'icon-park-outline:down'} />
        <br />
        <IconButton title={'Subscriptions'} className="font-bold" />

        <IconButton
          title={'Home'}
          icon={'material-symbols:playlist-play-rounded'}
        />

        <br />
        <IconButton title={'Explore'} className="font-bold" />
        <IconButton title={'Trending'} icon={'arcticons:youtube-go'} />
        <IconButton title={'Shopping'} icon={'mdi:shopping-outline'} />
        <IconButton title={'Music'} icon={'iconamoon:music-1-light'} />
        <IconButton title={'Movies'} icon={'mdi:movie-open-outline'} />
        <IconButton title={'Live'} icon={'ion:radio-outline'} />
        <IconButton title={'Gaming'} icon={'simple-icons:youtubegaming'} />
        <IconButton title={'News'} icon={'openmoji:newspaper'} />
        <IconButton title={'Sports'} icon={'mdi:youtube-sports'} />
        <IconButton title={'Learning'} icon={'ion:bulb-outline'} />
        <IconButton title={'Fashion & Beauty'} icon={'game-icons:hanger'} />

        <br />
        <IconButton title={'More from Youtube'} className="font-bold" />
        <IconButton
          title={'Youtube Premium'}
          icon={'logos:youtube-icon'}
          color={'red'}
        />
        <IconButton
          title={'Youtube Studio'}
          icon={'arcticons:youtube-studio'}
          color={'red'}
        />
        <IconButton
          title={'Youtube Music'}
          icon={'simple-icons:youtubemusic'}
          color={'red'}
        />
        <IconButton
          title={'Youtube Kids'}
          icon={'tabler:brand-youtube-kids'}
          color={'red'}
        />

        <br />
        <IconButton title={'Setting'} icon={'simple-icons:youtubestudio'} />
        <IconButton title={'Report history'} icon={'mdi-light:flag'} />
        <IconButton title={'Help'} icon={'ph:question'} />
        <IconButton
          title={'Send feedback'}
          icon={'material-symbols:feedback-outline-rounded'}
        />
      </div>
    </div>
  );
};

export default Sidebar;
