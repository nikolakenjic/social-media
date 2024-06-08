import { MdOutlineMoreVert } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';
import { BiLike } from 'react-icons/bi';
import Wrapper from '../assets/wrappers/PostWrapper';
import { Users } from './../../dummyData';
import { useEffect, useState } from 'react';
import fetchUrl from '../utils/axios';
import { format } from 'timeago.js';

const Post = ({ post }) => {
  console.log(post);
  // const user = Users.filter((user) => user.id === userId);
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetchUrl.get(`/user/${post.userId}`);
      setUser(res.data.user);
    };
    fetchUser();
  }, [post.userId]);

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
              src={user.profilePicture || ''}
              alt=""
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(user.createdAt)}</span>
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
            <BiLike className="likeIcon" onClick={handleLike} />
            <FcLike className="likeIcon" onClick={handleLike} />
            <span className="postLikeCounter">{likes} people like it</span>
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
