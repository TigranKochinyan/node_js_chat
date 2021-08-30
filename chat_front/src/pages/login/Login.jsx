import './login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-wrapper_left">
          <h3 className="login-title">Social App</h3>
          <span className="login-desc">
            Content with friends and the world around you on "Social App"
          </span>
        </div>
        <div className="login-wrapper_right">
          <div className="login-wrapper_right-box">
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="password" type="password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginCretae">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
