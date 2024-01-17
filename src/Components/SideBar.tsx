// import React, { useState } from "react";
import { FaTh, FaUserAlt, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../App.css";

function Sidebar({ children }: { children: any }): JSX.Element {
  const menuItem = [
    {
      path: "/",
      name: "Now Playing",
      icon: <FaTh />,
    },
    {
      path: "/upcoming",
      name: "Upcoming",
      icon: <FaUserAlt />,
    },

    {
      path: "/favourites",
      name: "Favourites",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="haupt">
      <div className="container">
        <div className="sidebar">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Sidebar;
