import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-72 bg-[#00A2C6] h-full py-4 px-5 flex flex-col gap-3">
      {/* Nav user profile */}
      <div className="flex flex-col items-center gap-2 border-b pb-2">
        <div className="border border-gray-500 bg-white h-32 w-32 flex items-center justify-center rounded-full">
          <BiUser size={80} className="text-gray-400" />
        </div>
        <h2 className="text-white">Garayew Guwancmyrat</h2>
        <p className="text-gray-300">Super admin</p>
      </div>

      {/* links */}
      <div className="flex flex-col text-white items-center py-4 gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` w-full  p-2 rounded   ${
              isActive
                ? "bg-[#16b3d6] border-l-4 border-white"
                : "border-[#00A2C6]"
            } hover:bg-[#16b3d6] hover:border-white border-l-4 border-[#00A2C6]`
          }
        >
          <p>Bash Sahypa</p>
        </NavLink>

        <NavLink
          to="/drivers"
          className={({ isActive }) =>
            ` w-full  p-2 rounded   ${
              isActive
                ? "bg-[#16b3d6] border-l-4 border-white"
                : "border-[#00A2C6]"
            } hover:bg-[#16b3d6] hover:border-white border-l-4 border-[#00A2C6]`
          }
        >
          <p>Surijiler</p>
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            ` w-full  p-2 rounded   ${
              isActive
                ? "bg-[#16b3d6] border-l-4 border-white"
                : "border-[#00A2C6]"
            } hover:bg-[#16b3d6] hover:border-white border-l-4 border-[#00A2C6]`
          }
        >
          <p>Hasabat</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
