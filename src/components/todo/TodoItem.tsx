import React from "react";
import { useRecoilState } from "recoil";
import todoListState from "../../recoils/todo/todoListState";
import TodoItemType from "../../types/TodoItem";

const replaceItemAtIndex = (
  arr: TodoItemType[],
  index: number,
  newValue: TodoItemType
): TodoItemType[] => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (
  arr: TodoItemType[],
  index: number
): TodoItemType[] => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

interface TodoItemProps {
  item: TodoItemType;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const [todoList, setTodoList] = useRecoilState<TodoItemType[]>(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  // input onChange event
  const editItemText = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    });

    setTodoList(newList);
  };

  // checkbox onChange event
  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodoList(newList);
  };

  // delete onClick event
  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <input type="text" value={item.text} onChange={editItemText} />

      <button onClick={deleteItem}>삭제</button>
    </div>
  );
};

export default TodoItem;
