import { Costemer } from "../costemer/Costemer";
import { Product } from "../product/Product";

export type Order = {
  costemer?: Costemer | null;
  createdAt: Date;
  id: string;
  price: number | null;
  products?: Array<Product>;
  updatedAt: Date;
};
