import React from 'react';
import Wrapper from '../assets/wrappers/PostsWrapper';
import { PostsData } from '../assets/data/postsData';
import Post from './Post';

const Posts = () => {
  return (
    <Wrapper>
      {PostsData.map((post, id) => {
        return <Post data={post} id={id} key={id} />;
      })}
    </Wrapper>
  );
};

export default Posts;
