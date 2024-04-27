import React, { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../config/firebase-config";

export const LoginForm = ({ handleLoginSignup, handleLoginWithGoogle }) => {
  const email = useRef("");
  const password = useRef("");

  async function LoginIntoAccount(e) {
    e.preventDefault();

    const userEmail = email.current.value;
    const userPassword = password.current.value;

    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
    } catch (err) {
      alert(err.code);
    }
  }

  // function to reset you password
  async function handleForgotPassword() {
    // Enteredemail by user
    const email = prompt("Enter your Email");
    // send an email for verification
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Email Sent");
    } catch (err) {
      alert(err.code);
    }
  }

  return (
    <div className="bg-gray-800 mt-10  md:mt-0 p-5 md:p-10 rounded-lg flex flex-col gap-y-4 max-w-sm w-full shadow-lg">
      <img
        src="./images/form-lock.png"
        alt=""
        className="w-14 bg-black rounded-full p-1 -rotate-12 cursor-pointer"
      />
      <h2 className="font-bold tracking-wide text-xl cursor-pointer">
        Login to Continue
      </h2>
      <form
        action=""
        className="flex flex-col gap-y-4"
        onSubmit={LoginIntoAccount}
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-gray-400">
            Email
          </label>
          <input
            required
            type="email"
            ref={email}
            name="email"
            className="bg-[#040714] rounded-md px-3 text-base py-2 text-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm text-gray-400">
            Password
          </label>
          <input
            required
            type="password"
            ref={password}
            name="password"
            className="bg-[#040714] rounded-md px-3 py-2 text-base text-gray-400 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 border rounded-md border-white bg-[#040714] active:bg-white active:text-black md:hover:bg-white md:hover:text-black md:active:opacity-75 text-base font-semibold tracking-wide transition ease-in-out"
        >
          Continue
        </button>
      </form>

      <div
        onClick={handleForgotPassword}
        className=" text-center font-base text-gray-400 cursor-pointer underline"
      >
        Forgot Password?
      </div>
      <div className=" text-center text-gray-600 text-sm">or</div>
      <button
        type="button"
        onClick={handleLoginWithGoogle}
        className="flex justify-center items-center hover:opacity-80 active:opacity-100 transition delay-100 ease-in rounded-md mx-auto bg-white w-full text-black px-3 py-2"
      >
        <FcGoogle className="w-8 h-6" />
        <span className=" font-semibold text-base">Sign in with Google</span>
      </button>
      <div className="mx-auto gap-x-1 flex text-gray-400 text-sm">
        <span>Don't have an account?</span>
        <span onClick={handleLoginSignup} className="text-white cursor-pointer">
          Create one
        </span>
      </div>
    </div>
  );
};
