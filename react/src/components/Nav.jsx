import React from "react";
import logo from "../assets/react.svg";
import { NavLink } from "react-router";
export default function Nav() {
  return (
    <div className=" py-6 px-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} />
        <div className="flex gap-4">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
    </div>
  );
}
