import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductCreateInput = {
  order?: OrderWhereUniqueInput | null;
};
