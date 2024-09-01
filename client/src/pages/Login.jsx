import { useRef } from 'react';
import Wrapper from '../assets/wrappers/LoginWrapper';

const Login = () => {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log('click');
    console.log(email.current.value);
    console.log(password);
  };

  return (
    <Wrapper>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">F1 Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on F1 Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
              ref={password}
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
