import { Character } from "./character";

export type DataObj = {
  count: number;
  limit: number;
  results: Character[];
  offset: number;
  total: number;
};
