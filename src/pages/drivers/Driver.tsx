import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/store/hooks";
import { driverByIdService } from "../../services/driverById.service";

const Driver = () => {
  const { id = "" } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(driverByIdService({ id }));
  }, []);
  return <></>;
};
export default Driver;
