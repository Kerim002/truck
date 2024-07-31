export type Loading = "idle" | "pending" | "succeeded" | "failed";
export type LocationSchema = {
  timestamp: number;
  latitude: number;
  longitude: number;
};
export type LocationItem = {
  deviceId: string;
  location: LocationSchema;
  batteryLevel: number;
  signalStatus: string;
  isLocked: boolean;
  status: string;
};
