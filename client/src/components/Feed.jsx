import Wrapper from '../assets/wrappers/FeedWrapper';
import Post from './Post';
import Share from './Share';
import { Posts } from './../../dummyData';

const Feed = () => {
  return (
    <Wrapper>
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} {...p} />
      ))}
    </Wrapper>
  );
};

export default Feed;
