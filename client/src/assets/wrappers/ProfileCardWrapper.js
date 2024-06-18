import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  overflow: hidden;
  background: var(--cardColor);
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  .ProfileImages {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--hrColor);
  }

  .ProfileImages > img:nth-of-type(1) {
    width: 100%;
  }

  .ProfileImages > img:nth-of-type(2) {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: absolute;
    bottom: -3rem;
    box-shadow: var(--profileShadow);
    object-fit: cover;
  }

  .ProfileName {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    gap: 10px;
  }

  .ProfileName > span:nth-of-type(1) {
    font-weight: bold;
  }

  /* Follow Status */
  .followStatus {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .followStatus > hr {
    width: 85%;
    border: 1px solid var(--hrColor);
  }

  .followStatus > div {
    display: flex;
    gap: 1rem;
    width: 80%;
    justify-content: space-around;
    align-items: center;
  }

  .follow {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
  }
  .follow > span:nth-of-type(1) {
    font-weight: bold;
  }

  .follow > span:nth-of-type(2) {
    color: var(--gray);
    font-size: 13px;
  }

  .vl {
    height: 150%;
    border-left: 2px solid var(--hrColor);
  }

  .myProfile {
    font-weight: bold;
    color: orange;
    align-self: center;
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;

export default Wrapper;
