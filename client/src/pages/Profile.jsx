import { useEffect, useState } from 'react';
import { Feed, Navbar, Rightbar, Sidebar } from '../components';
import Wrapper from '../assets/wrappers/ProfileWrapper';
import fetchUrl from '../utils/axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetchUrl.get(`/user?username=${username}`);

      setUser(res.data.user);
    };

    fetchUser();
  }, [username]);

  // console.log(user);
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="./../../images/1.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="./../../images/1.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Profile;
