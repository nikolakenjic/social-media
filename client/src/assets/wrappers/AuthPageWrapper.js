import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 4rem;
  position: relative;

  .Auth {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* left side */
  .a-left {
    gap: 2rem;
  }

  .a-left > img {
    width: 4rem;
    height: 4rem;
  }

  .Webname > h1 {
    font-size: 3rem;
    background-color: red;

    /* Create the gradient. */
    background-image: var(--buttonBg);

    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;

    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .Webname > h6 {
    font-size: 0.85rem;
  }

  .infoForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .infoInput {
    border: none;
    outline: none;
    background-color: var(--inputColor);
    border-radius: 8px;
    padding: 20px;
    flex: 1;
  }

  .infoForm > div {
    display: flex;
    gap: 1rem;
    height: 2rem;
    width: 90%;
  }

  .infoButton {
    width: 6rem;
    height: 2rem;
    align-self: flex-end;
  }

  .authForm {
    background-color: var(--cardColor);
    border-radius: 1rem;
    padding: 1rem;
  }

  .authForm > div {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
