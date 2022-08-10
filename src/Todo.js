import React, { useState } from "react";
import axios from "axios";

const Todo = ({ _id, name, completed, removeTodo }) => {
  const [edit, setEdit] = useState(false);
  const complete = async () => {
    if (!completed) {
      const finish = await axios.patch(`/todo/${_id}`, {
        completed: true,
      });
    }
  };
  const CompletedButton = () => {
    if (completed) {
      return <button className="completed-btn"></button>;
    } else {
      return (
        <button
          type="submit"
          className="uncompleted-btn"
          onClick={() => {
            complete();
          }}
        ></button>
      );
    }
  };

  return (
    <article className="todo">
      <h4>{name}</h4>
      <CompletedButton />
      <button onClick={() => removeTodo(_id)}>delete</button>
    </article>
  );
};

export default Todo;
