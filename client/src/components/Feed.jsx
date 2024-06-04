import Wrapper from '../assets/wrappers/FeedWrapper';
import Post from './Post';
import Share from './Share';
import { Posts } from './../../dummyData';
import { useEffect, useState } from 'react';
import fetchUrl from '../utils/axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchUrl.get(
        '/posts/timeline/66559ed126cc6994cd061f43'
      );
      setPosts(res.data.allPosts);
    };
    fetchData();
  }, []);

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
