import React, { useState } from "react";
import { NavLink, Navigate, useLocation } from "react-router-dom";
import { navigationLinks } from "./MenuListUser";
import { signOut } from "firebase/auth";
import { auth } from "../../Database/Fire";

export default function Navbar() {
  const [selected, setSelected] = useState(null);
  const { pathname } = useLocation();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("uid");
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="navbar mobile" style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 100, display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      {navigationLinks.map((item, index) => {
        const isActive = pathname === item.link;

        return (
          <NavLink to={item.link} key={item.link} onClick={() => setSelected(isActive ? null : index)}>
            <div className={`icon-container ${selected === index || isActive ? "selected" : ""}`}>{item.icon}</div>
          </NavLink>
        );
      })}
      <div onClick={signOutHandler} className="icon-container logout">
        <i className="bx bx-log-out text-[20px]"></i>
      </div>
    </nav>
  );
}
