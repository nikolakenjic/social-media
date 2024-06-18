import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;

  .Search {
    display: flex;
    background-color: var(--inputColor);
    border-radius: 10px;
    padding: 5px;
  }

  .Search > input {
    background-color: transparent;
    border: none;
    outline: none;
  }

  .logo {
    width: 3.5rem;
  }

  .s-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(106.23deg, #ff1b1b, #cd1414 100%);
    border-radius: 5px;
    padding: 4px;
    color: white;
  }

  .s-icon:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
