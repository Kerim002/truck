import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <Sidebar />
      <div className="w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
