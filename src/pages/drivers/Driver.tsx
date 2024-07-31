import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/store/hooks";
import { driverById } from "../../services/drivers.service";

const Driver = () => {
  const { id = "" } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(driverById({ id }));
  }, []);
  return <></>;
};
export default Driver;
