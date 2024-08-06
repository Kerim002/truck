import DriverBody from "./components/DriverBody";
import DriverNav from "./components/DriverNav";

const Driver = () => {
  return (
    <div className="w-full h-[calc(100vh-3rem)] bg-primary py-4 px-10 pb-10 flex flex-col gap-5">
      <DriverNav />
      <DriverBody />
    </div>
  );
};

export default Driver;
