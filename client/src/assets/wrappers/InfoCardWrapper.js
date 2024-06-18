import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: var(--cardColor);
  padding: 1rem;
  border-radius: 1rem;
  width: 90%;

  .infoHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .infoHead > div:hover {
    cursor: pointer;
  }

  .logout-button {
    width: 7rem;
    height: 2rem;
    margin-top: 6rem;
    align-self: flex-end;
  }
`;

export default Wrapper;
