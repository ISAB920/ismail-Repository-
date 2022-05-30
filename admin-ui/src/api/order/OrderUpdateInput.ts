import { CostemerWhereUniqueInput } from "../costemer/CostemerWhereUniqueInput";
import { ProductUpdateManyWithoutOrdersInput } from "./ProductUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  costemer?: CostemerWhereUniqueInput | null;
  price?: number | null;
  products?: ProductUpdateManyWithoutOrdersInput;
};
