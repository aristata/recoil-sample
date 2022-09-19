import React from "react";
import "./App.css";
import CharacterCounter from "./components/basic/CharacterCounter";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <div className="App">
      <CharacterCounter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
