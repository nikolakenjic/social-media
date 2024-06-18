import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto 20rem;
  gap: 1rem;

  .Profile-center {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default Wrapper;
