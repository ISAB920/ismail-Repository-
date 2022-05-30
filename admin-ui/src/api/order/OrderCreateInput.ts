import { CostemerWhereUniqueInput } from "../costemer/CostemerWhereUniqueInput";
import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  costemer?: CostemerWhereUniqueInput | null;
  price?: number | null;
  products?: ProductCreateNestedManyWithoutOrdersInput;
};
