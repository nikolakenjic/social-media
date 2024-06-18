import React from 'react';
import { LogoSearch, FollowersCard, InfoCard } from './index';
import Wrapper from '../assets/wrappers/ProfileSideWrapper';

const ProfileLeft = () => {
  return (
    <Wrapper>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </Wrapper>
  );
};

export default ProfileLeft;
