import React from 'react';
import coverImg from './../assets/img/formula1.png';
import profileImg from './../assets/img/lewis-hamilton-mercedes.jpg';
import Wrapper from '../assets/wrappers/ProfileCardWrapper';

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <Wrapper>
      <div className="ProfileImages">
        <img src={coverImg} alt="cover img" />
        <img src={profileImg} alt="profile img" />
      </div>

      <div className="ProfileName">
        <span>Lewis Hamilton</span>
        <span>Driver</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? '' : <span className="myProfile">My Profile</span>}
    </Wrapper>
  );
};

export default ProfileCard;
