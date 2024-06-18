import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  background-color: var(--cardColor);
  padding: 1rem;
  border-radius: 1rem;

  .profileImg {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }

  .postShare__info {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 1rem;
  }

  .postShare__info-input {
    background-color: var(--inputColor);
    border-radius: 10px;
    padding: 10px;
    font-size: 17px;
    border: none;
    outline: none;
  }

  .postOptions {
    display: flex;
    justify-content: space-around;
  }

  .option {
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }

  .option:hover {
    cursor: pointer;
  }

  .ps-button {
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
  }

  .previewImage {
    position: relative;
  }

  .previewImage > svg {
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    cursor: pointer;
  }

  .previewImage > img {
    width: 100%;
    max-height: 20rem;
    object-fit: contain;
    border-radius: 0.5rem;
  }
`;

export default Wrapper;
