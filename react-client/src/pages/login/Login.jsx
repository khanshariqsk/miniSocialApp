import "./login.css";
import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getUserLoginCredentialApi } from "../../utils/ApiService";
import {CircularProgress } from "@material-ui/core"
import { useHistory } from "react-router";

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory()
  const { isFetching, error, dispatch } = context;
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    getUserLoginCredentialApi({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    },dispatch);
  };
  console.log(isFetching)
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
          <form className="loginBox" onSubmit={loginFormSubmitHandler}>
            <h1 className="loginBoxType">Login</h1>
            <input placeholder="Email" className="loginInput" ref={emailRef} />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={passwordRef}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="white" size="1.5rem"/> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
           <button className="loginRegisterButton" disabled={isFetching} onClick={()=>{history.push('/register')}}>
              Create a New Account
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
