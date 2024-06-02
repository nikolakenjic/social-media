import { MdOutlineMoreVert } from 'react-icons/md';
import Wrapper from '../assets/wrappers/PostWrapper';
import { Users } from './../../dummyData';

const Post = ({ comment, date, desc, like, photo, userId }) => {
  const user = Users.filter((user) => user.id === userId);

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
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{like} people like it</span>
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
