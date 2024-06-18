import React from 'react';
import { PostSide, ProfileSide, RightSide } from '../components';
import Wrapper from '../assets/wrappers/HomePageWrapper';

const HomePage = () => {
  return (
    <Wrapper>
      <ProfileSide />
      <PostSide />
      <RightSide />
    </Wrapper>
  );
};

export default HomePage;
