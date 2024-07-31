import { UseFormRegister } from "react-hook-form";

type Props = {
  inputname: string;
  register: UseFormRegister<any>;
  name: string;
};

const ReInput = ({ inputname, register, name }: Props) => {
  return (
    <div className="relative w-full">
      <input
        {...register(inputname)}
        id={inputname}
        defaultValue=""
        type="text"
        className={`peer px-4 h-12 w-full border-2 rounded-lg border-gray-300 text-gray-900 placeholder-transparent focus:outline-[#00A2C6]
        }`}
        placeholder={inputname}
      />
      <label
        htmlFor={inputname}
        className="absolute left-3 bg-white px-1 -top-3 text-gray-600 text-[16px] transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3  peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:left-3 peer-focus:px-1 peer-focus:bg-white"
      >
        {inputname}
      </label>
    </div>
  );
};

export default ReInput;
