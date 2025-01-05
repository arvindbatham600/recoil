import { atom } from "recoil";

export const todos = atom({
  key: "todos",
  default: [],
});
export const filterName = atom({
  key: "filterName",
  default: "",
});
