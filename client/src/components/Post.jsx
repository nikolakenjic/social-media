import { MdOutlineMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BiLike } from 'react-icons/bi';
import Wrapper from '../assets/wrappers/PostWrapper';
import { Users } from './../../dummyData';
import { useEffect, useState } from 'react';
import fetchUrl from '../utils/axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  console.log(Users);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Wrapper>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={``}>
              <img
                className="postProfileImg"
                src="./../../public/images/1.jpeg"
                alt=""
              />
            </Link>
            {/* <span className="postUsername">{user.username}</span> */}
            {/* <span className="postDate">{format(user.createdAt)}</span> */}
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>
        <div className="postCenter">
          {/* <span className="postText">{desc && desc}</span>
          <img className="postImg" src={photo} alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <BiLike className="likeIcon" />
            <FcLike className="likeIcon" />
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
