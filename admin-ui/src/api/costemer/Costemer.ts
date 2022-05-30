import { Order } from "../order/Order";

export type Costemer = {
  address: string;
  age: Date | null;
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  orders?: Array<Order>;
  phoneNumber: number | null;
  updatedAt: Date;
};
