import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} text={text} setText={setText} />
      <TodoList todos={todos} text={text} />
    </div>
  );
}

export default App;
