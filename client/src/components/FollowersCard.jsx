import React from 'react';
import Wrapper from '../assets/wrappers/FollowersCardWrapper';
import { Followers } from '../assets/data/followersData';

const FollowersCard = () => {
  return (
    <Wrapper>
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImage" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default FollowersCard;
