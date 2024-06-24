import { Feed, Navbar, Rightbar, Sidebar } from '../components';
import Wrapper from '../assets/wrappers/ProfileWrapper';

const Profile = () => {
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
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="hello" />
            <Rightbar profile />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Profile;
