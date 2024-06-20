import Wrapper from '../assets/wrappers/RegisterWrapper';

const Register = () => {
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
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
