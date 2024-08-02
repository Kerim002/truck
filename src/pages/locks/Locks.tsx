import { useEffect, useState } from "react";
import Thead from "../../components/reusable/Thead";
import LocksRow from "./components/LocksRow";
import { DeviceSchema } from "../../types/deviceService";
import { api } from "../../app/api/api";

const locksHead = [
  {
    name: "No",
    size: 1,
  },
  {
    name: "Gulp Id",
    size: 4,
  },
  {
    name: "Batareya yagdayy",
    size: 4,
  },
  {
    name: "Gornusi",
    size: 4,
  },

  {
    name: "Yagdayy",
    size: 4,
  },
  {
    name: "Pozmak",
    size: 4,
  },
];

const Locks = () => {
  const [data, setData] = useState<DeviceSchema[]>([]);
  const fetchlocksData = async () => {
    try {
      const res = await api.get("/device/all_device?page=1&limit=40");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchlocksData();
  }, []);

  return (
    <div className="p-4">
      <Thead info={locksHead} />
      <div className="flex w-full flex-col pt-2 gap-2 h-[75vh] overflow-auto">
        {data?.map((item, index) => (
          <LocksRow item={item} key={item.deviceId} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Locks;
