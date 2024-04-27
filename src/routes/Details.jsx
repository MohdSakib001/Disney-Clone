import { MdGroups } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { Trailer } from "../components/Trailer";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { watchlistAction } from "../store/watchlistSlice";
import { Subscription } from "../components/Subscription";

export const Details = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [isTrailerPlay, setIsTrailerPlay] = useState(false);
  const [isMoviePlay, setIsMoviePlay] = useState(false);

  const watchlistStore = useSelector((store) => store.WatchList);
  const userCredentials = useSelector((store) => store.User);

  // Checking if the id of movie already in watchlist
  const [isAddedToWatchlist, setIsAddedToWatchlist] = useState(
    watchlistStore.includes(id)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function handleFirestoreData() {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
          if (doc.id === id) {
            setDetailData(doc.data());
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
    handleFirestoreData();
  }, [id]);

  // function to handle trailer play
  function handleTrailerPlay() {
    setIsTrailerPlay(!isTrailerPlay);
  }

  // function to handle movie play
  function handleMoviePlay() {
    setIsMoviePlay(!isMoviePlay);
  }

  function handleWatchList() {
    // TODO: agr id localstrage me present hai to chek ka tick vrna add ka.
    // TODO: done!
    setIsAddedToWatchlist(!isAddedToWatchlist);

    const object = {
      itemID: id,
      userID: userCredentials.userID,
    };

    if (isAddedToWatchlist) {
      dispatch(watchlistAction.removeFromWatchList(object));
    } else {
      dispatch(watchlistAction.addToWatchList(object));
    }
  }

  return (
    <>
      <div
        className="relative min-h-screen min-w-screen h-full w-full bg-no-repeat bg-cover bg-fixed bg-center top-[72px] overflow-hidden"
        style={{
          backgroundImage: `url(${detailData.backgroundImg})`,
        }}
      >
        {/* Content */}
        <div className="absolute top-[2%] left-[4%] space-y-4 overflow-y-scroll">
          <img
            className="w-[45vw]"
            src={detailData.titleImg}
            alt={detailData.title}
          />

          {/* Buttons */}
          <div className="space-x-3 flex flex-wrap gap-y-2 justify-start items-center">
            {/* Play button */}
            <button
              type="button"
              onClick={handleMoviePlay}
              className="text-[2.5vw] md:text-[2vw] text-black flex items-center gap-x-1 bg-white px-3 py-2 md:py-3 md:px-4 rounded-md hover:bg-gray-300"
            >
              <FaPlay />
              <span className="font-semibold tracking-wider">PLAY</span>
            </button>

            {/* Trailer Button */}
            <button
              type="button"
              onClick={handleTrailerPlay}
              className=" text-[2.5vw] md:text-[2vw] flex items-center gap-x-1 bg-black bg-opacity-20 px-3 py-2 md:py-3 md:px-4 rounded-md border border-white hover:bg-gray-300 hover:text-gray-900 hover:opacity-90 transition"
            >
              <FaPlay />
              <span className="font-semibold tracking-wider ">TRAILER</span>
            </button>

            {!isAddedToWatchlist ? (
              <span
                onClick={handleWatchList}
                className="p-2 border-2 border-white cursor-pointer bg-black bg-opacity-50 rounded-full text-[5vw] md:text-[4vw] transition delay-100 duration-500 ease-in-out"
              >
                <IoMdAdd />
              </span>
            ) : (
              <span
                onClick={handleWatchList}
                className="p-2 border-2 border-white cursor-pointer bg-white rounded-full text-[5vw] md:text-[4vw] text-black transition delay-100 duration-500 ease-in-out"
              >
                <FaCheck />
              </span>
            )}

            <span className="p-2 border-2 border-white cursor-pointer bg-black bg-opacity-50 rounded-full text-[5vw] md:text-[4vw] hover:text-black hover:bg-white transition delay-100 duration-500 ease-in-out">
              <MdGroups />
            </span>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-y-3 font-semibold tracking-wide w-4/5 text-white">
            <p className="text-[.8rem] md:text-[1rem]">{detailData.subTitle}</p>
            <p className="text-[1rem] md:text-[1.2rem]">
              {detailData.description}
            </p>
          </div>
        </div>
      </div>

      {isTrailerPlay && (
        <Trailer
          trailerURL={detailData.trailer}
          handleTrailerPlay={handleTrailerPlay}
        />
      )}
      {isMoviePlay && <Subscription handleMoviePlay={handleMoviePlay} />}
    </>
  );
};
