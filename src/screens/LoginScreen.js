import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
  const [singIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen_backgound">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        ></img>
        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          Sign in
        </button>
        <div className="loginScreen_gradient"></div>
      </div>

      <div className="loginScreen_body">
        {singIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited film, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input typeof="email" placeholder="Email Address"></input>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
