import { BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-72 bg-[#00A2C6] h-full px-5 flex flex-col gap-3 z-10">
      {/* Nav user profile */}
      <div className="flex flex-col items-center gap-2 border-b pb-2">
        <div className="border border-gray-500 bg-white h-32 w-32 flex items-center justify-center rounded-full">
          <BiUser size={80} className="text-gray-400" />
        </div>
        <h2 className="text-white">Garayew Guwancmyrat</h2>
        <p className="text-gray-300">Super admin</p>
      </div>

      {/* links */}
      <div className="flex flex-col text-white items-center py-4 gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` w-full  p-2 rounded flex gap-1 ${
              isActive
                ? "bg-[#16b3d6] border-l-4 border-white"
                : "border-[#00A2C6]"
            } hover:bg-[#16b3d6] hover:border-white border-l-4 border-[#00A2C6]`
          }
        >
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_368_374)">
              <rect
                x="4"
                y="0.5"
                width="7.92"
                height="10.08"
                rx="0.72"
                fill="#F9FAFC"
              />
              <rect
                x="14.0801"
                y="8.41998"
                width="7.92"
                height="10.08"
                rx="0.72"
                fill="#F9FAFC"
              />
              <rect
                x="14.0801"
                y="0.5"
                width="7.92"
                height="6.12"
                rx="0.72"
                fill="#F9FAFC"
              />
              <rect
                x="4"
                y="12.38"
                width="7.92"
                height="6.12"
                rx="0.72"
                fill="#F9FAFC"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_368_374"
                x="0"
                y="0.5"
                width="26"
                height="26"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_368_374"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_368_374"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <p>Bash Sahypa</p>
        </NavLink>

        <NavLink
          to="/drivers"
          className={({ isActive }) =>
            ` w-full  p-2 rounded  flex items-center gap-1 ${
              isActive
                ? "bg-[#16b3d6] border-l-4 border-white"
                : "border-[#00A2C6]"
            } hover:bg-[#16b3d6] hover:border-white border-l-4 border-[#00A2C6]`
          }
        >
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9 9.84979C11.8882 9.84979 13.5 11.4613 13.5 13.4492V14.7989C13.5 15.5443 12.8956 16.1487 12.15 16.1487H1.35C0.604413 16.1487 0 15.5443 0 14.7989V13.4492C0 11.4613 1.61177 9.84979 3.6 9.84979H9.9ZM15.3 9.84997C16.7912 9.84997 18 11.0586 18 12.5495V13.8993C18 14.6448 17.3956 15.249 16.65 15.249H15.3V13.4492C15.3 11.9775 14.5933 10.6709 13.5007 9.84997H15.3ZM6.75 0.851379C8.98677 0.851379 10.8 2.66431 10.8 4.90066C10.8 7.13702 8.98677 8.94995 6.75 8.94995C4.51325 8.94995 2.7 7.13702 2.7 4.90066C2.7 2.66431 4.51325 0.851379 6.75 0.851379ZM14.4 3.5509C15.8912 3.5509 17.1 4.75952 17.1 6.25043C17.1 7.74137 15.8912 8.94995 14.4 8.94995C12.9088 8.94995 11.7 7.74137 11.7 6.25043C11.7 4.75952 12.9088 3.5509 14.4 3.5509Z"
              fill="#F9FAFC"
            />
          </svg>

          <p>Surijiler</p>
        </NavLink>
        <NavLink
          to="/locks"
          className={({ isActive }) =>
            ` w-full  p-2 rounded flex  gap-1  ${
              isActive
                ? "bg-[#16b3d6] border-l-4 border-white"
                : "border-[#00A2C6]"
            } hover:bg-[#16b3d6] hover:border-white border-l-4 border-[#00A2C6]`
          }
        >
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.25C5.87827 1.25 3.84344 2.07958 2.34315 3.55625C0.842855 5.03291 0 7.0357 0 9.12402C0 14.439 7 20.4429 7.35 20.6988L8 21.25L8.65 20.6988C9 20.4429 16 14.439 16 9.12402C16 7.0357 15.1571 5.03291 13.6569 3.55625C12.1566 2.07958 10.1217 1.25 8 1.25ZM8 13.061C7.20887 13.061 6.43552 12.8301 5.77772 12.3975C5.11992 11.9649 4.60723 11.35 4.30448 10.6306C4.00173 9.91125 3.92252 9.11965 4.07686 8.35594C4.2312 7.59224 4.61216 6.89073 5.17157 6.34013C5.73098 5.78953 6.44371 5.41457 7.21964 5.26266C7.99556 5.11075 8.79983 5.18871 9.53073 5.48669C10.2616 5.78468 10.8864 6.28929 11.3259 6.93673C11.7654 7.58417 12 8.34535 12 9.12402C12 10.1682 11.5786 11.1696 10.8284 11.9079C10.0783 12.6462 9.06087 13.061 8 13.061Z"
              fill="#F9FAFC"
            />
            <path
              d="M8 11.2238C9.10457 11.2238 10 10.3307 10 9.22906C10 8.12739 9.10457 7.23431 8 7.23431C6.89543 7.23431 6 8.12739 6 9.22906C6 10.3307 6.89543 11.2238 8 11.2238Z"
              fill="#F9FAFC"
            />
          </svg>

          <p>Locks</p>
        </NavLink>
        <NavLink
          to="/report"
          className={({ isActive }) =>
            ` w-full  p-2 rounded flex gap-1 items-center  ${
              isActive
                ? "bg-[#16b3d6] border-l-4 border-white"
                : "border-[#00A2C6]"
            } hover:bg-[#16b3d6] hover:border-white border-l-4 border-[#00A2C6]`
          }
        >
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 0.5H5C1.5 0.5 0 2.3 0 5V14C0 16.7 1.5 18.5 5 18.5H13C16.5 18.5 18 16.7 18 14V5C18 2.3 16.5 0.5 13 0.5ZM5 9.725H9C9.41 9.725 9.75 10.031 9.75 10.4C9.75 10.769 9.41 11.075 9 11.075H5C4.59 11.075 4.25 10.769 4.25 10.4C4.25 10.031 4.59 9.725 5 9.725ZM13 14.675H5C4.59 14.675 4.25 14.369 4.25 14C4.25 13.631 4.59 13.325 5 13.325H13C13.41 13.325 13.75 13.631 13.75 14C13.75 14.369 13.41 14.675 13 14.675ZM15.5 7.025H13.5C11.98 7.025 10.75 5.918 10.75 4.55V2.75C10.75 2.381 11.09 2.075 11.5 2.075C11.91 2.075 12.25 2.381 12.25 2.75V4.55C12.25 5.171 12.81 5.675 13.5 5.675H15.5C15.91 5.675 16.25 5.981 16.25 6.35C16.25 6.719 15.91 7.025 15.5 7.025Z"
              fill="#F9FAFC"
            />
          </svg>

          <p>Hasabat</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
