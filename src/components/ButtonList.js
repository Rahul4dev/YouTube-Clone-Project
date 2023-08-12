import React from 'react';
import Button from './Shared/Button';
import { Icon } from '@iconify/react';

const list = [
  'All',
  'Music',
  'Live',
  'Cricket',
  'Comedy',
  'Game',
  'Soccer',
  'Cooking',
  'Coding',
  'Cars',
];

const ButtonList = () => {
  const arrowClass =
    'flex justify-content items-center bg-gray-light  rounded-full cursor-pointer';

  return (
    <div className="buttonListContainer w-[80%] flex items-center justify-between  border-gray-200">
      <div className={arrowClass}>
        <Icon icon={'ic:outline-arrow-left'} height={24} width={24} />
      </div>
      <ul className="flex">
        {list.map((item) => (
          <li className="cursor-pointer" key={`${item}`}>
            <Button name={item} />
          </li>
        ))}
      </ul>
      <div className={arrowClass}>
        <Icon icon={'ic:outline-arrow-right'} height={24} width={24} />
      </div>
    </div>
  );
};

export default ButtonList;
