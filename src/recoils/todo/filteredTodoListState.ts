import { selector } from "recoil";
import TodoItemType from "../../types/TodoItem";
import todoListFilterState from "./todoListFilterState";
import todoListState from "./todoListState";

/*
 * filteredTodoListState 는 내부적으로 두개의 의존성을 구독하고 있다
 * todoListFilterState, todoListState
 * 그래서 둘 중 하나라도 변하면 filteredTodoListState 는 재 실행된다
 */
const filteredTodoListState = selector<TodoItemType[]>({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  }
});

export default filteredTodoListState;
