import { Outlet } from "react-router";
import Nav from "../components/Nav";

export default function Root() {
  return (
    <div className="">
      {/* The Outlet is responsible for rendering child routes and it should be nested in the parent */}
      <Nav />
      <Outlet />
    </div>
  );
}
