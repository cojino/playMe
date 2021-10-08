import React from "react";

import Todo from "./Todo";

const Form = ({ setText, setTodos, todos, text }) => {
  const clickHandler = (e) => {
    setText(e.target.value);
  };
  const refrechNo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: text, id: Math.random() * 100 }]);
    setText("");
  };
  return (
    <form>
      <div>
        <h2>Todo List</h2>
        <div>
          <input value={text} onChange={clickHandler} type="text" />
          <button onClick={refrechNo}>
            <i className="fas fa-plus-square" />
          </button>
        </div>
        <hr />
        <div>
          <input type="text" />
          <button>
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
