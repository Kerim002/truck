import { LocationSchema } from "./global";
import { StatusKeys } from "./homeService";

export type DeviceSchema = {
  deviceId: string;
  batteryLevel: number;
  signalStatus: string;
  isLocked: boolean;
  status: StatusKeys;
  location: LocationSchema | null;
};
