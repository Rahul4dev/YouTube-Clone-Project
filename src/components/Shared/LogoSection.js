import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';

const LogoSection = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex h-16 justify-center items-center">
      <p
        onClick={toggleMenuHandler}
        alt="menu"
        className="hover:bg-gray rounded-full cursor-pointer items-center flex justify-center"
      >
        <Icon icon="solar:hamburger-menu-broken" width="30" height="30" />
      </p>
      <a href="/" alt="menu">
        <img
          src="/assets/YouTube-Logo.wine.svg"
          alt="logo"
          className="h-20 w-36"
        />
      </a>
    </div>
  );
};

export default LogoSection;
