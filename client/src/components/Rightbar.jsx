import { useContext, useEffect, useState } from 'react';
import { Users } from '../../dummyData';
import Wrapper from '../assets/wrappers/Rightbar';
import fetchUrl from '../utils/axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Add, Remove } from '@material-ui/icons';

export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await fetchUrl.get('/user/friends/' + user._id);

        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user._id]);

  const handleClick = async () => {
    try {
      if (followed) {
        await fetchUrl.put('/user/' + user._id + '/unfollow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'UNFOLLOW_USER', payload: user._id });
      } else {
        await fetchUrl.put('/user/' + user._id + '/follow', {
          userId: currentUser._id,
        });
        dispatch({ type: 'FOLLOW_USER', payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }

    setFollowed(!followed);
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => {
            return (
              <li key={user.id} className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img
                    className="rightbarProfileImg"
                    src={user.profilePicture}
                    alt=""
                  />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? 'unfollow' : 'follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={`/profile/${friend.username}`}
              key={friend._id}
              className="rightbarFollowing"
            >
              <img
                src="/images/chef.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{friend.username}</span>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <Wrapper className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </Wrapper>
  );
}
