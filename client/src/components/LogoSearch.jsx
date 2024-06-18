import React from 'react';
import Wrapper from '../assets/wrappers/LogoSearchWrapper';
import { UilSearch } from '@iconscout/react-unicons';
import logo from './../assets/img/f1logo.png';

const LogoSearch = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo img" className="logo" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </Wrapper>
  );
};

export default LogoSearch;
