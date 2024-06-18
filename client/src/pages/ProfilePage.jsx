import React from 'react';
import Wrapper from '../assets/wrappers/ProfilePageWrapper';
import { PostSide, ProfileCard, ProfileLeft, RightSide } from '../components';

const ProfilePage = () => {
  return (
    <Wrapper>
      <ProfileLeft />

      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </Wrapper>
  );
};

export default ProfilePage;
