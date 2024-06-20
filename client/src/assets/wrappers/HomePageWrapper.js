import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 18rem auto 20rem;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: 15rem auto 15rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 0.25rem;
    padding: 0.25rem;
  }
`;

export default Wrapper;
