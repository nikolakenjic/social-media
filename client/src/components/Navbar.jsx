import { IoMdPerson } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineChat } from 'react-icons/md';
import { IoIosNotifications } from 'react-icons/io';
import Wrapper from '../assets/wrappers/NavbarWrapper';
import img from '../assets/images/1.jpg';

const Navbar = () => {
  return (
    <Wrapper>
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
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
        <img src={img} alt="" className="topbarImg" />
      </div>
    </Wrapper>
  );
};

export default Navbar;
