import { BsBatteryHalf } from "react-icons/bs";

const DriverBodyLeft = () => {
  return (
    <div className="flex-[3] flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-5 h-36">
        <div className="h-full bg-white rounded py-2 px-3 flex flex-col justify-between">
          <div className="flex justify-between p-2 ">
            <div className="flex-col flex gap-2">
              <p className="text-sm text-gray-500">Batarey</p>
              <h2 className="text-2xl font-medium">46%</h2>
            </div>
            <div>
              <div className="bg-green-400 p-2 rounded-full">
                <BsBatteryHalf className="text-4xl text-white" />
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
              <p className="text-sm text-gray-500">Batarey</p>
              <h2 className="text-2xl font-medium">46%</h2>
            </div>
            <div>
              <div className="bg-green-400 p-2 rounded-full">
                <BsBatteryHalf className="text-4xl text-white" />
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
              <p className="text-sm text-gray-500">Batarey</p>
              <h2 className="text-2xl font-medium">46%</h2>
            </div>
            <div>
              <div className="bg-green-400 p-2 rounded-full">
                <BsBatteryHalf className="text-4xl text-white" />
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
      </div>
      <div className="h-full w-full bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default DriverBodyLeft;
