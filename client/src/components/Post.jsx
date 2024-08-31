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
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  // const user = Users.filter((u) => u.id === post?.userId)[0];
  // console.log('postId', post._id);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetchUrl.get(`/user?userId=${post.userId}`);

      setUser(res.data.user);
    };

    fetchUser();
  }, [post.userId]);

  // console.log('User', user);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Wrapper>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture || './../../public/images/no-avatar.png'
                }
                alt=""
              />
            </Link>
            <span className="postUsername">
              {user ? user.username : 'No user'}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MdOutlineMoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post?.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <BiLike className="likeIcon" onClick={likeHandler} />
            <FcLike className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people like it</span>
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
