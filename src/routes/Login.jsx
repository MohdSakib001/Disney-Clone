import React from "react";
import { CenterContent } from "../components/CenterContent";

export const Login = () => {
  return (
    <div className="-z-20 absolute flex flex-col items-center h-screen w-screen select-none">
      <div
        className="flex flex-col items-center justify-center w-full box-border h-full pb-10 bg-cover bg-no-repeat mt-5"
        style={{
          backgroundImage: "url('/images/login-background.jpg')",
        }}
      >
        <CenterContent />
      </div>
    </div>
  );
};
