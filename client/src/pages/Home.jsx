import { Feed, Sidebar, Navbar, Rightbar } from '../components';
import Wrapper from '../assets/wrappers/HomeWrapper';

const Home = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Feed username="nikola" />
        <Rightbar />
      </Wrapper>
    </>
  );
};

export default Home;
