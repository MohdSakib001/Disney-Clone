import React, { useEffect } from "react";
import { ImageSlider } from "../components/ImageSlider";
import { Viewers } from "../components/Viewers";
import { Recommended } from "../components/Recommended";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../store/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((store) => store.User);
  const movieSelector = useSelector((store) => store.Movies);

  // Categories
  let recommend = [];
  let newDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    async function handleFirestoreData() {
      try {
        // Sending req to firebase db to get the required data
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
          // Switch case to keep the data categorized
          switch (doc.data().type) {
            case "recommend":
              recommend = [...recommend, { id: doc.id, ...doc.data() }];
              break;
            case "new":
              newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
              break;
            case "original":
              original = [...original, { id: doc.id, ...doc.data() }];
              break;
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
            default:
              break;
          }
        });
      } catch (err) {
        console.error(err);
      }

      // Dispatching data to redux store
      dispatch(
        movieAction.setMovie({
          recommend,
          newDisney,
          original,
          trending,
        })
      );
    }
    handleFirestoreData();
  }, [userSelector.name]);

  // Content
  const InnerBoxDetails = [
    // Recommended
    {
      category: "Recommended for you",
      movies: movieSelector.recommend,
    },

    // New on disney
    {
      category: "New to Disney+",
      movies: movieSelector.newDisney,
    },

    // Originals
    {
      category: "Originals",
      movies: movieSelector.original,
    },

    // Trending
    {
      category: "Trending",
      movies: movieSelector.trending,
    },
  ];

  // const userCredentials = useSelector((store) => store.User);
  // console.log(userCredentials);

  return (
    <div
      className="min-h-screen pt-[73px] bg-cover bg-no-repeat w-screen px-2 bg-fixed"
      style={{ backgroundImage: "url('/images/home-background.png')" }}
    >
      <div className="py-10 overflow-scroll w-full custom-height">
        <ImageSlider />
        <Viewers />

        {/* Creating sections for recommended and new on disney+ */}
        {InnerBoxDetails.map((InnerBoxDetail, index) => (
          <Recommended key={index} InnerBoxDetail={InnerBoxDetail} />
        ))}
      </div>
    </div>
  );
};
