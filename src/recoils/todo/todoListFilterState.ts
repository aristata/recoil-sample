import { atom } from "recoil";

const todoListFilterState = atom<string>({
  key: "todoListFilterState",
  default: "Show All"
});

export default todoListFilterState;
