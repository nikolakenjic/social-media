import { MdOutlineMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BiLike } from 'react-icons/bi';
import Wrapper from '../assets/wrappers/PostWrapper';
import { Users } from './../../dummyData';
import { useState } from 'react';

const Post = ({ comment, date, desc, like, photo, userId }) => {
  const user = Users.filter((user) => user.id === userId);
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked((prevValue) => !prevValue);
  };

  return (
    <Wrapper>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user[0]?.profilePicture}
              alt=""
            />
            <span className="postUsername">{user[0]?.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc && desc}</span>
          <img className="postImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <BiLike className="likeIcon" onClick={handleLike} />
            <FcLike className="likeIcon" onClick={handleLike} />
            <span className="postLikeCounter">{likes} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
