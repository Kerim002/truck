import { LocationItem } from "./global";

export type StatusKeys = "transit" | "export" | "import" | "empty";
type StatusItem = { status: StatusKeys; count: number };
export type MainSchema = {
  Locations: LocationItem[];
  Status: StatusItem[];
};
