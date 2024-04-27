import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/routes/App.jsx";
import "./index.css";
import disneyStore from "./store/index.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../src/routes/Login.jsx";
import { Home } from "../src/routes/Home.jsx";
import { Protected } from "../src/routes/Protected.jsx";
import { Details } from "./routes/Details.jsx";
import { WatchList } from "./components/WatchList.jsx";
import { LoginForm } from "./components/LoginForm.jsx";
import { LoginSignup } from "./components/LoginSignup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/loginsignup",
        element: <LoginSignup />,
      },
      {
        path: "/home",
        element: (
          <Protected>
            <Home />
          </Protected>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Protected>
            <Details />
          </Protected>
        ),
      },
      {
        path: "/watchlist",
        element: (
          <Protected>
            <WatchList />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={disneyStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
