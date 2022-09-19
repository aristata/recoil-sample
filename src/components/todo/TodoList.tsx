import { useRecoilValue } from "recoil";
import todoListState from "../../recoils/todo/todoListState";
import TodoItemType from "../../types/TodoItem";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";

const TodoList = () => {
  const todoList = useRecoilValue<TodoItemType[]>(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
