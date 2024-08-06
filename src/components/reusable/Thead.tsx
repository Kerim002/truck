import { ReactNode } from "react";

type Props = {
  info: {
    name: string;
    size: number;
    icon?: ReactNode;
    type?: string;
    onClick?: () => void;
    button?: boolean;
  }[];
};

const Thead = ({ info }: Props) => {
  return (
    <div className="w-full   bg-primary  text-white flex rounded py-2 sticky top-0 z-10">
      {info?.map((item, index) => (
        <span
          className={`${
            item.button && "cursor-pointer"
          }  flex justify-center font-semibold`}
          onClick={item.onClick}
          key={index}
          style={{ flex: item.size }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default Thead;
