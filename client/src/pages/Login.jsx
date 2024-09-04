import { useContext, useRef } from 'react';
import Wrapper from '../assets/wrappers/LoginWrapper';
import { loginCall } from '../apiCalls';
import { AuthContext } from '../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log('click');
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);

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
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size={30} />
              ) : (
                'Log In'
              )}
            </button>
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
