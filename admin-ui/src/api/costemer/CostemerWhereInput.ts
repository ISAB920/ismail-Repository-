import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CostemerWhereInput = {
  address?: StringFilter;
  age?: DateTimeNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  orders?: OrderListRelationFilter;
  phoneNumber?: FloatNullableFilter;
};
