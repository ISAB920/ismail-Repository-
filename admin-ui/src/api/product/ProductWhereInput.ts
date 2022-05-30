import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
