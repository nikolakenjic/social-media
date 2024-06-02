import { MdRssFeed } from 'react-icons/md';
import { MdOutlineChat } from 'react-icons/md';
import { FaCirclePlay } from 'react-icons/fa6';
import { MdGroups } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';
import { MdHelpOutline } from 'react-icons/md';
import { MdWorkOutline } from 'react-icons/md';
import { MdOutlineEvent } from 'react-icons/md';
import { IoSchool } from 'react-icons/io5';
import Wrapper from '../assets/wrappers/SidebarWrapper';
import { Users } from '../../dummyData';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineChat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FaCirclePlay className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <MdHelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <MdWorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <MdOutlineEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <IoSchool className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => {
            console.log(user);
            return (
              <li key={user.id} className="sidebarFriend">
                <img
                  className="sidebarFriendImg"
                  src={user.profilePicture}
                  alt=""
                />
                <span className="sidebarFriendName">{user.username}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
