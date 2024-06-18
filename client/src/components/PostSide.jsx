import React from 'react';
import Wrapper from '../assets/wrappers/PostSideWrapper';
import { PostShare, Posts } from './index';

const PostSide = () => {
  return (
    <Wrapper>
      <PostShare />
      <Posts />
    </Wrapper>
  );
};

export default PostSide;
