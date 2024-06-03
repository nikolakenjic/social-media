import { MdPermMedia } from 'react-icons/md';
import { MdLabel } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmojiEmotions } from 'react-icons/md';
import Wrapper from '../assets/wrappers/ShareWrapper';

const Share = () => {
  return (
    <Wrapper>
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="../../public/images/1.jpg"
            alt=""
          />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia color="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdLabel color="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <IoLocationSharp color="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions color="goldenrod" className="shareIcon" />
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
