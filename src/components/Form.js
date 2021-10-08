import React from "react";

const Form = ({ nState, setNState, text, setText }) => {
  //this is for change
  const changeHandeler = (e) => {
    setNState(e.target.value);
  };
  //this will be for what happen after i click
  const clickHandeler = (e) => {
    e.preventDefault();
    setText([...text, { newText: nState, id: Math.random() * 1000 }]);
    setNState("");
  };
  return (
    <form>
      <h2>Todo List {nState}</h2>
      <div>
        <input value={nState} onChange={changeHandeler} type="text" />
        <button onClick={clickHandeler}>
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
    </form>
  );
};

export default Form;
