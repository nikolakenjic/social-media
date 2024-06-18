import React from 'react';
import Wrapper from '../assets/wrappers/ProfileSideWrapper';
import { FollowersCard, LogoSearch, ProfileCard } from './index';

const ProfileSide = () => {
  return (
    <Wrapper>
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </Wrapper>
  );
};

export default ProfileSide;
