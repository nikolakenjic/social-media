import Wrapper from '../assets/wrappers/FeedWrapper';
import Post from './Post';
import Share from './Share';
import { Posts } from './../../dummyData';
import { useContext, useEffect, useState } from 'react';
import fetchUrl from '../utils/axios';
import { AuthContext } from '../context/AuthContext';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await fetchUrl.get('/posts/profile/' + username)
        : await fetchUrl.get('/posts/timeline/' + user._id);

      setPosts(
        res.data.allPosts.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };

    fetchData();
  }, [user._id, username]);

  return (
    <Wrapper>
      {username === user.username && <Share />}
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </Wrapper>
  );
};

export default Feed;
