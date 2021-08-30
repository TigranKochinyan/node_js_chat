import '../login/login.scss';
import './register.scss';

const Register = () => {
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
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <input placeholder="Confirm password" type="password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginCretae">Log In</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Register;
