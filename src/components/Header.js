import React, { useEffect } from "react";
import { auth } from "../utils/Firebase.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, USER_LOGO } from "../utils/Constant.js";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, displayName } = user;
        dispatch(addUser({ email: email, uid: uid, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center  ">
      <img className="w-44" src={NETFLIX_LOGO} alt="mainlogo" />
      {user && (
        <div className="flex justify-between items-center w-40">
          <img
            src={USER_LOGO}
            alt="userLogo"
            className="w-12 mx-4 rounded-md"
          />
          <button
            className="text-white  bg-red-700 px-2 py-1 rounded-2xl hover:bg-red-900 hover:border border-solid border-white font-serif font-medium"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
