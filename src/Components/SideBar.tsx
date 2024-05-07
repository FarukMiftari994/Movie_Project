// import React, { useState } from "react";
import { FaTh, FaUserAlt, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar({ children }: { children: React.ReactNode }): JSX.Element {
  const { user } = useContext(AuthContext);
  const menuItem = [
    {
      path: "/",
      name: "Now Playing",
      icon: <FaTh />,
    },
    {
      path: "/popular",
      name: "Popular",
      icon: <FaUserAlt />,
    },
    {
      path: "/favourites",
      name: "Favourites",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="main-container">
      <div className="container">
        <div className="sidebar">
          {menuItem.map(
            (item, index) =>
              (item.name !== "Favourites" || user) && (
                <NavLink to={item.path} key={index} className="link">
                  <div className="icon">{item.icon}</div>
                  <div className="link_text">{item.name}</div>
                </NavLink>
              )
          )}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Sidebar;
