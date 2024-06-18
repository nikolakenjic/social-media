import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--cardColor);
  padding: 1rem;
  border-radius: 1rem;
  padding-left: 2rem;

  .trend {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .trend > span:nth-of-type(1) {
    font-weight: bold;
  }
  .trend > span:nth-of-type(2) {
    font-size: 13px;
  }
`;

export default Wrapper;
