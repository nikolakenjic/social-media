import { MdPermMedia } from 'react-icons/md';
import { MdLabel } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmojiEmotions } from 'react-icons/md';
import Wrapper from '../assets/wrappers/ShareWrapper';
import sharePics from '../assets/images/1.jpg';

const Share = () => {
  return (
    <Wrapper>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={sharePics} alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdLabel htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <IoLocationSharp htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Share;
