import { Outlet } from "react-router";
import Nav from "../componets/Nav";
import Categories from "../componets/Categories";

export default function RootLayout() {
  return (
    <div>
      <Nav/>
      <Categories/>
      <Outlet />
    </div>
  );
}
