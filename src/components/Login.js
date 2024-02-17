import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { validateData } from "../utils/Validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase.js";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  // It will return "current" object
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    //validate name , email and password
    const message = validateData(
      isSignInFrom ? null : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInFrom) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
          className="absolute"
        />
      </div>
      <div className="h-screen relative flex justify-center items-center">
        <div className="login-container  bg-black bg-opacity-80  w-3/12 p-8  flex flex-col justify-center items-center">
          <header className="font-bold py-3">
            <h1 className="text-3xl  text-white">
              {isSignInFrom === true ? "Sign In" : "Sign Up"}
            </h1>
          </header>
          <form onSubmit={(e) => e.preventDefault()}>
            {isSignInFrom === false && (
              <div className="my-6">
                <input
                  ref={name}
                  type="text"
                  placeholder="Name"
                  className="px-6 py-3 w-72 bg-gray-600 text-white"
                />
              </div>
            )}
            <div className="my-6">
              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="px-6 py-3 w-72 bg-gray-600 text-white"
              />
            </div>
            <div className="my-6">
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="px-6 py-3 w-72 bg-gray-600 text-white"
              />
              <p className="text-red-600 text-xl font-semibold text-center w-72 mt-1">
                {errorMessage}
              </p>
            </div>

            <button
              className="bg-red-700 text-white w-72 p-2 rounded-md mt-4 hover:bg-red-800"
              onClick={handleSubmit}
            >
              {isSignInFrom === true ? "Sign In" : "Sign Up"}
            </button>

            {isSignInFrom === true && (
              <div className="text-center mt-3 text-sm underline">
                <Link className="text-white">Forget password?</Link>
              </div>
            )}
          </form>
          {isSignInFrom === true ? (
            <p className="text-gray-300 my-11">
              New to Netflix?{" "}
              <span className="font-bold" onClick={handleToggle}>
                <Link className="text-white">Sign Up</Link>
              </span>
            </p>
          ) : (
            <p className="text-gray-300 my-11">
              Already an User?{" "}
              <span className="font-bold" onClick={handleToggle}>
                <Link className="text-white">Sign In</Link>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
