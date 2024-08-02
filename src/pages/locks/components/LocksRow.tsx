import { BiTrash } from "react-icons/bi";
import { DeviceSchema } from "../../../types/deviceService";

type Props = {
  item: DeviceSchema;
  index: number;
};

const LocksRow = ({ item, index }: Props) => {
  return (
    <div className="flex border-b py-2">
      <span className="flex-1 text-center">{index + 1}</span>
      <span className="flex-[4] text-center">{item.deviceId}</span>
      <span className="flex-[4] text-center">{item.batteryLevel}</span>
      <span className="flex-[4] text-center">{item.status}</span>
      <span className="flex-[4] text-center">
        <p className="text-primary font-medium">
          {item.isLocked ? (
            <p className="text-primary font-medium">Yapyk</p>
          ) : (
            <p className="text-red-400 font-medium">Acyk</p>
          )}
        </p>
      </span>
      <span className="flex flex-[4] justify-center gap-2">
        {/* <span className="p-2 bg-primary rounded-full ">
          <BiEdit className="text-white text-xl" />
        </span> */}
        <span className="p-2 bg-red-500 rounded-full ">
          <BiTrash className="text-white text-xl" />
        </span>
      </span>
    </div>
  );
};

export default LocksRow;
