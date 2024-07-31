import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
const Layout = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <Sidebar />
      <div className="w-full h-full flex flex-col pt-12">
        <div className="bg-primary h-12 flex items-center justify-center fixed top-0 left-0 right-0 z-0">
          <h2 className="text-white text-xl font-semibold">
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
