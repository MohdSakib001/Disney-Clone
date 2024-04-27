import React from "react";
import { Link } from "react-router-dom";

export const CenterContent = () => {
  return (
    <div className=" w-full flex items-center justify-center px-3 sm:mx-20 ">
      <div className=" flex flex-col flex-wrap items-center gap-y-5 w-full md:w-2/3 max-w-[800px] ">
        <img
          src="/images/cta-logo-one.svg"
          alt=""
          className="w-full max-w-[800px] mb-3"
        />

        <Link
          to="/loginsignup"
          className=" text-white font-bold bg-blue-600 px-2 py-4 sm:py-5 w-full text-[4vw] sm:text-[2vw] tracking-wider hover:bg-blue-500 cursor-pointer text-center rounded-md"
        >
          GET ALL THERE
        </Link>

        <p className="cursor-pointer md:text-lg tracking-widest leading-5 ">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with Disney+ subscription. As of 03/26/24, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          src="/images/cta-logo-two.png"
          alt="genre"
          className="w-full max-w-[800px] mb-3"
        />
      </div>
    </div>
  );
};
