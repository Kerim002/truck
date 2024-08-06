import { BiEdit, BiTrash } from "react-icons/bi";

const DriversRow = () => {
  return (
    <div className="flex border-b py-2">
      <span className="flex-1 text-center">1</span>
      <span className="flex-[3] text-center">ABC123</span>
      <span className="flex-[3] text-center">DEV123</span>
      <span className="flex-[3] text-center">11.07.2024ý</span>
      <span className="flex-[3] text-center">Asgabat</span>
      <span className="flex-[3] text-center">Balkan</span>
      <span className="flex-[3] text-center">Kerim</span>
      <span className="flex-[3] text-center">Hajymammedow</span>
      <span className="flex-[3] text-center">+99363432039</span>
      <span className="flex flex-[3] justify-center gap-2">
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

export default DriversRow;
