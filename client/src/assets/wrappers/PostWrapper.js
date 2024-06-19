import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--cardColor);
  border-radius: 1rem;
  gap: 1rem;

  .postImg {
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .postReact {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export default Wrapper;
