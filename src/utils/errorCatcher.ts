import { AxiosError } from "axios";

const errorCatcher = (error: any) => {
  let axiosError: AxiosError;
  if (error instanceof AxiosError) {
    axiosError = error;
  } else {
    axiosError = new AxiosError("An unknown error occurred");
  }
  return axiosError.response?.data;
};
export { errorCatcher };
