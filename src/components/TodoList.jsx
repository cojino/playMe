import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, text }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
