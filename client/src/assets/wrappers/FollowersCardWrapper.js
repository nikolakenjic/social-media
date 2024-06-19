import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 0.7rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  height: 250px; /* Adjust the height as needed */
  overflow: hidden;

  h3 {
    margin: 0;
    padding: 1rem;
  }

  .followers-container {
    overflow-y: scroll;
    height: 100%;
  }

  .follower {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eaeaea;
  }

  .follower > div {
    display: flex;
    gap: 10px;
  }

  .followerImage {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }

  .name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .name > span:nth-of-type(1) {
    font-weight: bold;
  }

  .fc-button {
    height: 2rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Wrapper;
