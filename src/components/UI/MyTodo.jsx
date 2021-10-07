import React, { useState } from "react";
import Add from "../WORK/Add";
import Search from "../WORK/Search";
import Delete from "../WORK/Delete";
const MyTodo = () => {
  const [cont, setCont] = useState([
    {
      id: 1,
      name: "lol player",
    },
    {
      id: 2,
      name: "his game is trash",
    },
    {
      id: 3,
      name: "hi bro",
    },
  ]);
  return (
    <div>
      <Add />
      <Search />
      <Delete key={cont.id} cont={cont} />
    </div>
  );
};

export default MyTodo;
