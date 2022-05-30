import { CostemerWhereUniqueInput } from "../costemer/CostemerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type OrderWhereInput = {
  costemer?: CostemerWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  products?: ProductListRelationFilter;
};
