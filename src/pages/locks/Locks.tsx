import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import Thead from "../../components/reusable/Thead";
import LocksRow from "./components/LocksRow";
import { deviceListService } from "../../services/deviceList.service";
import { selectDeviceList } from "../../reducers/device-list.slice";

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
    name: "Hasaba gosulan senesi",
    size: 4,
  },
  {
    name: "Yagdayy",
    size: 4,
  },
  {
    name: "Pozmak / Uytgetmek",
    size: 4,
  },
];

const Locks = () => {
  const dispatch = useAppDispatch();
  const deviceList = useAppSelector(selectDeviceList);
  console.log(deviceList);
  useEffect(() => {
    dispatch(deviceListService({ page: 1, limit: 10 }));
  }, []);
  return (
    <div className="p-4">
      <Thead info={locksHead} />
      <div className="flex w-full flex-col pt-2 gap-2">
        <LocksRow />
        <LocksRow />
        <LocksRow />
      </div>
    </div>
  );
};

export default Locks;
