import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../store";

export default function Nav() {
  const { user, handleLogout } = useAuth();
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="font-bold text-3xl">
          DUMMYSTORE
        </NavLink>

        <div className="flex gap-8 items-center">
          {user?.isAuthenticated ? (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1"
              >{`Hi, ${user?.data?.firstName}`}</div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>

                <li>
                  <NavLink to="/orders">Orders</NavLink>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-ghost ">
                <i className="ri-user-line text-xl"></i>MY ACCOUNT
              </button>
            </NavLink>
          )}

          <NavLink to="/cart">
            <button className="btn btn-ghost ">
              <i className="ri-shopping-cart-line text-xl"></i>MY CART
            </button>
          </NavLink>
          <NavLink to="/search">
            <button className="btn btn-ghost">
              <i className="ri-search-line text-xl"></i>Search
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
