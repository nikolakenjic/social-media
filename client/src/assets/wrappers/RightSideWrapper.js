import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .navIcons {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .navIcons > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .r-button {
    height: 3rem;
    width: 80%;
    align-self: center;
  }
`;

export default Wrapper;
