import React from "react";
import { Outlet } from "react-router";
import ShoppingImage from "../assets/shopping.jpg";

export default function AuthLayout() {
  return (
    <section>
      <div className="grid grid-cols-12 items-center justify-center min-h-screen">
        <div className="col-span-12 md:col-span-6 h-full">
          <img
            src={ShoppingImage}
            alt="shopping"
            className="w-full h-full objecct-cover"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
