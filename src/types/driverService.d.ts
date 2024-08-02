export type DriverItem = {
  id?: number;
  create_time?: string;
  name: string;
  phone: string;
  car_number: string;
  car_model: string;
  weight: number;
  country: string;
};

export type DriverPayload = Omit<DriverItem, "id">;
