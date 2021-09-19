import "./register.css";

const Register = () => {
    return (
        <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">SK SOCIALAPP</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on SK SOCIALAPP.
            </span>
          </div>
          <div className="loginRight">
            <div className="signUpBox">
            <h1 className="loginBoxType">Sign Up</h1>
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" type="password" className="loginInput" />
              <input placeholder="Confirm Password" type="password" className="loginInput" />
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">
                Log into Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Register;