import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
// import { Wrapper } from './StyledWrapper.styles';

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
