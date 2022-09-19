import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoListState from "../../recoils/todo/todoListState";
import TodoItemType from "../../types/TodoItem";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // recoil state 에 set 만 하고 싶을 땐 useSetRecoilState 훅을 사용한다
  const setTodoList = useSetRecoilState<TodoItemType[]>(todoListState);

  // input onChange event
  const onChangeHandler = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  // button onClick event = Add todo item
  const addItem = () => {
    // update atom state
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ]);

    // init local state
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChangeHandler} />
      <button onClick={addItem}>추가</button>
    </div>
  );
};

export default TodoItemCreator;

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}
