import { MdOutlineMoreVert } from 'react-icons/md';
import Wrapper from '../assets/wrappers/PostWrapper';

const Post = () => {
  return (
    <Wrapper>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="../../public/images/1.jpg"
              alt=""
            />
            <span className="postUsername">Anna Har</span>
            <span className="postDate">Date</span>
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">desc</span>
          <img className="postImg" src="../../public/images/3.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Post;
