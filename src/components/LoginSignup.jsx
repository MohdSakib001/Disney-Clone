import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebase-config";
import { useDispatch } from "react-redux";
import { userAction } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // To keep track of
  function handleLoginSignup() {
    setIsLogin(!isLogin);
  }

  // SignIn function
  async function handleLoginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
        userID: result.user.uid,
      };

      dispatch(userAction.setUserLoginDetails(user));

      navigate("/home");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      className="custom-height mt-[73px] py-20 flex justify-center items-start md:items-center overflow-scroll bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/home-background.png')" }}
    >
      {isLogin ? (
        <LoginForm
          handleLoginSignup={handleLoginSignup}
          handleLoginWithGoogle={handleLoginWithGoogle}
        />
      ) : (
        <SignupForm
          handleLoginSignup={handleLoginSignup}
          handleLoginWithGoogle={handleLoginWithGoogle}
        />
      )}
    </div>
  );
};
