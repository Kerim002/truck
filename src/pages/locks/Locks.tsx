import Thead from "../../components/reusable/Thead";
import LocksRow from "./components/LocksRow";

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
