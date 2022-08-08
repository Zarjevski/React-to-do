import React from "react";

const Todo = ({ _id, name, completed }) => {
  return (
    <article className="todo">
      <h4>{name}</h4>
      <h5>{_id}</h5>
      <button>delete</button>
    </article>
  );
};

export default Todo;
