import { BiEdit, BiTrash } from "react-icons/bi";

const LocksRow = () => {
  return (
    <div className="flex border-b py-2">
      <span className="flex-1 text-center">1</span>
      <span className="flex-[4] text-center">ABC123</span>
      <span className="flex-[4] text-center">11.07.2024ý</span>
      <span className="flex-[4] text-center">
        <p className="text-primary font-medium">Aktiv</p>
      </span>
      <span className="flex flex-[4] justify-center gap-2">
        <span className="p-2 bg-primary rounded-full ">
          <BiEdit className="text-white text-xl" />
        </span>
        <span className="p-2 bg-red-500 rounded-full ">
          <BiTrash className="text-white text-xl" />
        </span>
      </span>
    </div>
  );
};

export default LocksRow;
