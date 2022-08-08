import React from "react";

const Todo = ({ _id, name, completed, removeTodo }) => {
  return (
    <article className="todo">
      <h4>{name}</h4>
      <h5>{_id}</h5>
      <button onClick={() => removeTodo(_id)}>delete</button>
    </article>
  );
};

export default Todo;
