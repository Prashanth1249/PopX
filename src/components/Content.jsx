import React from "react";
import Home from "./Home";
import SignupForm from "./SignupForm";
import LoginForm from "./Login";
import Account from "./Account";
import { useState } from "react";
function Content()
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [isClickedLogin,setClickedLogin]=useState(false);
    const[isClickedSignup,setClickedSignup]=useState(false);
    const handleSignupClick = () => {
        setClickedSignup(true);
      };
    
      const handleLoginClick = () => {
        setClickedLogin(true);
      };
    
      const handleSignup = () => {
        setIsSignedUp(true);
      };
    
      const handleLogin = () => {
        setIsLoggedIn(true);
      };

    return(
        <div >
            { !isClickedLogin && !isClickedSignup &&
                (
                    <Home
                    onSignupClick={handleSignupClick}
                    onLoginClick={handleLoginClick}
                    />
                )
            }
            {isClickedSignup && !isLoggedIn && !isSignedUp && (
                <SignupForm
                handleSignup={handleSignup}
                />
              )}
            {isClickedLogin && !isLoggedIn && !isSignedUp && (
                <LoginForm
                handleLogin={handleLogin}
                />
              )}
             {(isSignedUp || isLoggedIn) && <Account />}
            {/* <Home/> */}
            {/* <SignupForm/> */}
            {/* <LoginForm/> */}
            {/* <Account/> */}
        </div>
    )
}
export default Content;