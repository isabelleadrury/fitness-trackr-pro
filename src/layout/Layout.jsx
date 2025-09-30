import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navClass = ({ isActive }) => "link" + (isActive ? "active" : "");
/** The shared layout for all pages of the app */
export default function Layout({ children }) {
  return (
    <>
      <header className="nav">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
        <NavLink to="activities" className={navClass}>
          Activities
        </NavLink>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
