import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { watchlistAction } from "../store/watchlistSlice";
import { EmptyWatchlist } from "./EmptyWatchlist";

export const WatchList = () => {
  const watchlistStore = useSelector((store) => store.WatchList);
  const userStore = useSelector((store) => store.User);

  const dispatch = useDispatch();

  // creating an empty array state to contain the firebase data
  const [movieData, setMovieData] = useState([]);

  // Extracting data of movies from firebase on first go
  useEffect(() => {
    async function handleFirestoreData() {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        setMovieData([...data]);
      } catch (err) {
        console.error(err);
      }
    }
    handleFirestoreData();
  }, []);

  // this will exclude the data of all items from watchlist
  const watchlistMovies = movieData.filter((element) =>
    watchlistStore.includes(element.id)
  );

  // Function to remove the movie from watchlist on watchlist page
  function handleRemoveFromWatchlist(id) {
    const obj = {
      userID: userStore.userID,
      itemID: id,
    };
    dispatch(watchlistAction.removeFromWatchList(obj));
  }

  return (
    <div
      className="w-screen h-screen pt-[73px] overflow-hidden bg-[#040714] bg-fixed bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-background.png')" }}
    >
      <h2 className="py-4 shadow-xl text-center font-bold text-xl tracking-wide ">
        <span className="cursor-pointer">WatchList</span>
      </h2>

      {watchlistStore.length === 0 ? (
        <EmptyWatchlist />
      ) : (
        <ul className="w-full max-w-5xl mx-auto h-full overflow-y-scroll space-y-5 pb-20 pt-4">
          {watchlistMovies.map((movie, index) => (
            <li
              key={index}
              className=" cursor-pointer p-2 md:p-5 flex gap-x-5 justify-between md:items-center bg-[#040714] mx-1  rounded-md shadow-lg"
            >
              <img
                src={movie.cardImg}
                alt={movie.title}
                className="w-52 max-h-32 border-4 border-gray-500 rounded-lg md:hover:scale-105 transition duration-500 delay-100 ease-in-out"
              />

              <div className="flex flex-1 flex-col md:flex-row  justify-between mx-auto items-center">
                <h2 className="text-lg font-semibold">{movie.title}</h2>

                <button
                  onClick={() => handleRemoveFromWatchlist(movie.id)}
                  className=" md:max-h-10 max-w-xs mx-auto md:mx-0 px-2 bg-transparent py-1 rounded-md cursor-pointer border border-white font-semibold tracking-wide active:bg-white active:text-[#040714]  md:hover:bg-white md:hover:text-[#040714] transition duration-500 ease-in-out"
                >
                  Remove from watchList
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
