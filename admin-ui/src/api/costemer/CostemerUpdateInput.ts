import { OrderUpdateManyWithoutCostemersInput } from "./OrderUpdateManyWithoutCostemersInput";

export type CostemerUpdateInput = {
  address?: string;
  age?: Date | null;
  email?: string;
  name?: string;
  orders?: OrderUpdateManyWithoutCostemersInput;
  phoneNumber?: number | null;
};
