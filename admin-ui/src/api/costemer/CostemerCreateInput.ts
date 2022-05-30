import { OrderCreateNestedManyWithoutCostemersInput } from "./OrderCreateNestedManyWithoutCostemersInput";

export type CostemerCreateInput = {
  address: string;
  age?: Date | null;
  email: string;
  name: string;
  orders?: OrderCreateNestedManyWithoutCostemersInput;
  phoneNumber?: number | null;
};
