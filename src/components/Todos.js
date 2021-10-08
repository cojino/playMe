import React from "react";
import Todo from "./Todo";

const Todos = ({ text, setText }) => {
  console.log(text);
  return (
    <div>
      <ul>
        {text.map((e) => (
          <Todo
            setText={setText}
            text2={text}
            text={e.newText}
            e={e}
            key={e.id}
            id={e.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
