import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 0.7rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 13px;

  .follower {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
