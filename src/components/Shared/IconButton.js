import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const IconButton = ({ title, icon, color, className, linkTO }) => {
  if (title === 'Shorts') {
    return (
      <Link
        to={linkTO}
        className={`flex px-2 py-1 justify-start items-center hover:border hover:border-none hover:rounded-lg hover:bg-gray-light w-full ${className}`}
      >
        <img
          src="../assets/youtube-shorts-icon.svg"
          alt=""
          className="w-7 h-7 mr-2"
        />
        <p className={className ? className : 'font-semibold'}>{title}</p>
      </Link>
    );
  }
  return (
    <button
      className={`flex px-2 py-1 justify-start items-center hover:border hover:border-none hover:rounded-lg hover:bg-gray-light w-full ${className}`}
    >
      <Icon icon={icon} height={26} width={26} className="mr-1" color={color} />
      <p className={className ? className : 'font-semibold'}>{title}</p>
    </button>
  );
};

export default IconButton;
