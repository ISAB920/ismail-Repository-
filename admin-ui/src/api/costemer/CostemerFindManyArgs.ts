import { CostemerWhereInput } from "./CostemerWhereInput";
import { CostemerOrderByInput } from "./CostemerOrderByInput";

export type CostemerFindManyArgs = {
  where?: CostemerWhereInput;
  orderBy?: Array<CostemerOrderByInput>;
  skip?: number;
  take?: number;
};
