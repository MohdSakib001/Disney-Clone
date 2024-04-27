import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useState } from "react";
import { FullPageLoader } from "../components/FullPageLoader";
import { Sidebar } from "../components/Sidebar";
import { AiFillHome, AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { MdLocalMovies } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { userAction } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { LoginSignup } from "../components/LoginSignup";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebar, setSidebar] = useState(true);
  const [searchBar, setSearchBar] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle the search State
  function handleSearchBar(e) {
    setSearchBar(!searchBar);
  }

  // Array for HeaderFeature
  const headerFeatures = [
    { feature: "home", icon: <AiFillHome />, url: "/home" },
    { feature: "search", icon: <AiOutlineSearch />, url: "#search" },
    { feature: "watchlist", icon: <GoPlus />, url: "/watchlist" },
    { feature: "Originals", icon: <AiFillStar />, url: "#Originals" },
    {
      feature: "New to Disney+",
      icon: <MdLocalMovies />,
      url: "#NewtoDisney+",
    },
    { feature: "Trending", icon: <IoMdTrendingUp />, url: "#Trending" },
  ];

  function handleIsLoading() {
    if (isLoading) {
      setIsLoading(false);
    }
  }

  function handleSidebar() {
    setSidebar(!sidebar);
  }

  // SignOut function
  async function handleSignOut() {
    // Confirmation block for user if they really want to logout
    if (confirm("Do you want to LogOut?")) {
      try {
        await signOut(auth);
        dispatch(userAction.setSignOutState());
        // Closing the sidebar incase its open
        if (sidebar === false) {
          handleSidebar();
        }
        navigate("/");
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <>
      <div className=" select-none">
        <Header
          searchBar={searchBar}
          handleSearchBar={handleSearchBar}
          headerFeatures={headerFeatures}
          handleIsLoading={handleIsLoading}
          handleSidebar={handleSidebar}
          handleSignOut={handleSignOut}
        />

        <Sidebar
          handleSearchBar={handleSearchBar}
          handleSidebar={handleSidebar}
          sidebar={sidebar}
          headerFeatures={headerFeatures}
          handleSignOut={handleSignOut}
        />

        {isLoading && <FullPageLoader />}
        <Outlet />
        {/* <LoginSignup /> */}
      </div>
    </>
  );
}

export default App;
