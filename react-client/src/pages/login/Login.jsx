import "./login.css";

const Login = () => {
    return (
        <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SK SOCIALAPP</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SK SOCIALAPP
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
              <h1 className="loginBoxType">Login</h1>
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;