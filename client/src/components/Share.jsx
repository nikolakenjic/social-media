import { MdPermMedia } from 'react-icons/md';
import { MdLabel } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmojiEmotions } from 'react-icons/md';
import Wrapper from '../assets/wrappers/ShareWrapper';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import fetchUrl from '../utils/axios';

const Share = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    try {
      await fetchUrl.post('/posts', newPost);

      // Takes reload after create post
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

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
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MdPermMedia color="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </label>
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
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Share;
