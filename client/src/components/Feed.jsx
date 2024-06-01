import Wrapper from '../assets/wrappers/FeedWrapper';
import Post from './Post';
import Share from './Share';

const Feed = () => {
  return (
    <Wrapper>
      <Share />
      <Post />
    </Wrapper>
  );
};

export default Feed;
