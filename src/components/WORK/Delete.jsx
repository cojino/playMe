import React from "react";

const Delete = ({ cont }) => {
  return (
    <div>
      {cont.map((c) => (
        <ul>
          <li>
            {c.name}
            <button>
              <i className="fas fa-trash"></i>
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Delete;
