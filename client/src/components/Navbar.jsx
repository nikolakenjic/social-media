import { IoMdPerson } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineChat } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import Wrapper from '../assets/wrappers/NavbarWrapper';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Wrapper>
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">F1 Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <CiSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IoMdPerson />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <MdOutlineChat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src="../../public/images/1.jpg" alt="" className="topbarImg" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;
