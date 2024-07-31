import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";

type Inputs = {
  username: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (login: Inputs) => {
    // loginer(login)
    //   .then(() => {
    //     navigate("/");
    //   })
    //   .catch(() => {
    //     setLoginFailed(true);
    //   });
  };

  return (
    // <div className="w-screen h-screen  bg-gradient-radial from-[#00BAE4] to-[#00677E] flex justify-center items-center">
    <div className="w-screen h-screen  bg-gradient-to-t from-[#00BAE4] to-[#00677E] flex justify-center items-center">
      <div className="w-[960px] h-[640px] bg-white rounded-[20px] flex">
        <div className="flex-[3] h-full p-10 flex flex-col gap-8">
          <div className="flex flex-col h-40 justify-between">
            <span className="flex items-center text-gray-500 gap-2">
              <BiArrowBack />
              <p className="text-gray-500">Yza</p>
            </span>
            <span>
              <h1 className="text-3xl font-semibold">Salam Admin !</h1>
              <p className="text-gray-500">
                Sistema girmek ucin degisli maglumatlary girizin
              </p>
            </span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mt-10 gap-5"
          >
            <div className="relative">
              <input
                {...register("username", { required: true })}
                id="username"
                defaultValue=""
                name="username"
                type="text"
                className={`peer px-4 h-12 w-full border-2 rounded-lg text-gray-900 placeholder-transparent ${
                  errors.username || loginFailed
                    ? "border-red-500 focus:outline-red-500"
                    : "border-gray-300 focus:outline-[#00A2C6]"
                }`}
                placeholder="john@doe.com"
              />
              <label
                htmlFor="username"
                className="absolute bg-white px-1 left-3 -top-3 text-gray-600 text-[16px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:left-3 peer-focus:px-1 peer-focus:bg-white"
              >
                Username
              </label>
            </div>
            <div className="relative">
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                className={`peer px-4 h-12 w-full border-2 rounded-lg text-gray-900 placeholder-transparent ${
                  errors.password || loginFailed
                    ? "border-red-500 focus:outline-red-500"
                    : "border-gray-300 focus:outline-[#00A2C6]"
                }`}
                placeholder="password"
              />
              <label
                htmlFor="password"
                className="absolute bg-white px-1 left-3 -top-3 text-gray-600 text-[16px] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:left-3 peer-focus:px-1 peer-focus:bg-white"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#00A2C6] py-2 text-lg font-semibold text-white rounded-md"
            >
              Iceri gir
            </button>
          </form>
        </div>
        <div className="flex-[4] h-full">
          <img
            src={"./truck.png"}
            alt="truck"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
