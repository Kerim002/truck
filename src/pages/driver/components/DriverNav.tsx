import { BiCamera } from "react-icons/bi";
import { BsBarChartLineFill, BsBatteryHalf } from "react-icons/bs";
const DriverNav = () => {
  return (
    <div className="grid grid-cols-4 gap-4 h-32 w-full">
      {/* Single card */}
      <div className="h-full bg-indigo-700 rounded py-2 px-3 flex flex-col justify-between">
        <div className="flex justify-between p-2 ">
          <div className="flex-col flex gap-2">
            <p className="text-sm text-gray-200">Ulag Id</p>
            <h2 className="text-2xl text-white font-medium">DEV 3434</h2>
          </div>
        </div>
        <div>
          <p className="flex gap-1 text-white">Planyyew Plany</p>
        </div>
      </div>
      <div className="h-full bg-white rounded py-2 px-3 flex flex-col justify-between">
        <div className="flex justify-between p-2 ">
          <div className="flex-col flex gap-2">
            <p className="text-sm text-gray-500">Batarey</p>
            <h2 className="text-2xl font-medium">46%</h2>
          </div>
          <div>
            <div className="bg-indigo-700 p-2 rounded-full">
              <BsBatteryHalf className="text-3xl text-white" />
            </div>
          </div>
        </div>
        <div>
          <p className="flex gap-1">
            <span className="text-green-500">8640 sag </span>
            galdy
          </p>
        </div>
      </div>
      <div className="h-full bg-white rounded py-2 px-3 flex flex-col justify-between">
        <div className="flex justify-between p-2 ">
          <div className="flex-col flex gap-2">
            <p className="text-sm text-gray-500">Gulp yagdayy</p>
            <h2 className="text-2xl font-medium">Yapyk</h2>
          </div>
          <div>
            <div className="bg-indigo-700 p-2 rounded-full">
              <BsBatteryHalf className="text-3xl text-white" />
            </div>
          </div>
        </div>
        <div>
          <button className="px-2 py-1 rounded-md flex items-center gap-1 text-indigo-700 shadow hover:bg-indigo-700 hover:text-white">
            Surata almak
            <BiCamera />
          </button>
        </div>
      </div>
      <div className="h-full bg-white rounded py-2 px-3 flex flex-col justify-between">
        <div className="flex justify-between p-2 ">
          <div className="flex-col flex gap-2">
            <p className="text-sm text-gray-500">Signal yagday</p>
            <h2 className="text-2xl font-medium">Gowy</h2>
          </div>
          <div>
            <div className="bg-indigo-700 p-2 rounded-full">
              <BsBarChartLineFill className="text-4xl text-white" />
            </div>
          </div>
        </div>
        <div>
          <p className="flex gap-1 text-indigo-700">Aktiv</p>
        </div>
      </div>
    </div>
  );
};

export default DriverNav;
