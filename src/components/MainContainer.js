import React from 'react';
import { Outlet } from 'react-router-dom';
import MainWrapper from './Shared/MainWrapper';

const MainContainer = () => {
  return (
    <div className="items-center">
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </div>
  );
};

export default MainContainer;
