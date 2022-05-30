import { Costemer as TCostemer } from "../api/costemer/Costemer";

export const COSTEMER_TITLE_FIELD = "name";

export const CostemerTitle = (record: TCostemer): string => {
  return record.name || record.id;
};
