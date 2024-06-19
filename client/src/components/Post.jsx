import React from 'react';
import Wrapper from '../assets/wrappers/PostWrapper';
import Comment from '../assets/img/comment.png';
import Share from '../assets/img/share.png';
import Heart from '../assets/img/like.png';
import NotLike from '../assets/img/notlike.png';

const Post = ({ data }) => {
  return (
    <Wrapper>
      <img src={data.img} alt="" className="postImg" />

      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </Wrapper>
  );
};

export default Post;
