import React from "react";
import { Link } from "react-router-dom";

export const HeaderFeature = ({ headerFeatures, handleSearchBar }) => {
  return (
    <>
      {headerFeatures.map((headerFeature, index) =>
        // IF url is watchlist
        headerFeature.url === "/watchlist" || headerFeature.url === "/home" ? (
          // Use react-router-dom
          <Link key={index} to={headerFeature.url}>
            <li className="flex gap-x-2 items-center py-2 lg:py-0">
              <span className="border-b-4 border-transparent">
                {headerFeature.icon}
              </span>
              <span className="border-b-2 border-transparent  hover:border-white transition delay-100 ease-in-out uppercase">
                {headerFeature.feature}
              </span>
            </li>
          </Link>
        ) : (
          // Else use a link
          <a key={index} href={headerFeature.url}>
            <li
              onClick={headerFeature.url === "#search" ? handleSearchBar : null}
              className="flex gap-x-2 items-center py-2 lg:py-0"
            >
              <span className="border-b-4 border-transparent">
                {headerFeature.icon}
              </span>
              <span className="border-b-2 border-transparent  hover:border-white transition delay-100 ease-in-out uppercase">
                {headerFeature.feature}
              </span>
            </li>
          </a>
        )
      )}
    </>
  );
};
