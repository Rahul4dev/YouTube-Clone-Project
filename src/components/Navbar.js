import React from 'react';

import { Icon } from '@iconify/react';
import LogoSection from './Shared/LogoSection';

const Navbar = () => {
  return (
    <div className="w-full shadow-lg flex items-center justify-between h-[15%]">
      <div className="ml-8">
        <LogoSection />
      </div>
      <section className="SearchSection flex justify-end items-center w-[40rem] ">
        <div className="flex items-center justify-between border border-r-2 border-gray rounded-full  h-10 w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-[88%] h-[90%] ml-4 "
          />
          <button className="h-full rounded-r-full w-[12%] bg-gray flex justify-center items-center">
            <Icon icon="system-uicons:search" height={30} />
          </button>
        </div>
        <button className="rounded-full flex justify-center items-center bg-gray ml-5 h-10 w-12 ">
          <Icon icon="material-symbols:mic" height={30} />
        </button>
      </section>
      <section className="userSection flex justify-evenly items-center w-1/4 ">
        <Icon icon="majesticons:video-plus-line" height={30} width={30} />
        <Icon icon="fa-regular:bell" height={30} width={30} />
        <Icon icon="mingcute:user-4-fill" height={30} width={30} />
      </section>
    </div>
  );
};

export default Navbar;
