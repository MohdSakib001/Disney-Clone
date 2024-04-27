import React from "react";

export const Search = ({ searchBar }) => {
  // Function to keep the default sttings off of a form
  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <div
      id="search"
      className={`absolute py-4 px-2 rounded-b-md bg-[#040714] transition delay-100 duration-500 ease-in-out  w-screen top-[70px] -right-[1px] -translate-y-full opacity-0 -z-20 ${
        searchBar && "translate-y-0 opacity-100 "
      }`}
    >
      <form
        action=""
        className="max-w-md mx-auto flex items-center justify-around gap-x-2 sm:gap-x-5 flex-wrap gap-y-3 -z-20"
      >
        <input
          type="search"
          name="search"
          id="search"
          className="flex-1 px-3 py-2 font-semibold rounded-lg focus:outline-none bg-[#1d2032] shadow-lg"
        />
        <button
          type="submit"
          onClick={(e) => handleSearch(e)}
          className="border-2 border-[#1d2032] rounded-md px-3 py-1 hover:border-2  hover:border-gray-700 transition active:bg-white active:text-[#040714] font-semibold tracking-wide active:border-2 active:border-[#1d2032] shadow-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};
