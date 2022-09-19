import { atom } from "recoil";
import TodoItemType from "../../types/TodoItem";

const todoListState = atom<TodoItemType[]>({
  key: "todoListState",
  default: []
});

export default todoListState;
