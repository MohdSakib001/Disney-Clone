import React from "react";
import { useNavigate } from "react-router-dom";

export const EmptyWatchlist = () => {
  const navigate = useNavigate();

  function handleAddToWatchList() {
    navigate("/home");
  }

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <h2 className="font-semibold tracking-wide text-md">
        Watchlist is Empty
      </h2>
      <button
        onClick={handleAddToWatchList}
        className="border border-white px-4 py-2 rounded-md shadow-lg hover:bg-white hover:text-black transition delay-100 duration-500 ease-in-out font-semibold tracking-wide text-md"
      >
        Add some
      </button>
    </div>
  );
};
