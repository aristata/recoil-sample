import { useRecoilValue } from "recoil";
import filteredTodoListState from "../../recoils/todo/filteredTodoListState";
import todoListState from "../../recoils/todo/todoListState";
import TodoItemType from "../../types/TodoItem";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";

const TodoList = () => {
  // changed from todoListState to filteredTodoListState
  // const todoList = useRecoilValue<TodoItemType[]>(todoListState);
  const todoList = useRecoilValue<TodoItemType[]>(filteredTodoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
