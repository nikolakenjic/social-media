import Wrapper from '../assets/wrappers/FeedWrapper';
import Post from './Post';
import Share from './Share';
import { Posts } from './../../dummyData';
import { useEffect, useState } from 'react';
import fetchUrl from '../utils/axios';

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  console.log('username', username);

  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await fetchUrl.get('/posts/profile/' + username)
        : await fetchUrl.get('/posts/timeline/6665671e0d46771264a6732c');

      setPosts(res.data.allPosts);
    };
    fetchData();
  }, [username]);

  return (
    <Wrapper>
      <Share />
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </Wrapper>
  );
};

export default Feed;
