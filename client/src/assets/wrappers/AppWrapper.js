import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  color: var(--black);
  background: #f3f3f3;
  /* padding: 1rem 1rem; */

  .blur {
    position: absolute;
    width: 22rem;
    height: 14rem;
    border-radius: 50%;
    background: #a6ddf0;
    filter: blur(72px);
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    border-radius: 0.5rem;
    background: var(--buttonBg);
    transition: all 0.2s ease-out;
  }

  .button:hover {
    cursor: pointer;
    color: var(--orange);
    background: transparent;
    border: 2px solid var(--orange);
  }

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export default Wrapper;
