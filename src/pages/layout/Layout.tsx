import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col md:pt-12">
        <div className="bg-primary h-12 md:flex hidden items-center justify-center fixed top-0 left-0 right-0 z-0">
          <h2 className="text-white md:text-xl font-semibold p-2 text-sm">
            TÜRKMENISTANYŇ DÖWLET GÜMRÜK GULLUGY
          </h2>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
