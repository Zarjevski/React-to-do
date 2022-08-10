import React, { useState } from "react";
import axios from "axios";

const Todo = ({ _id, name, completed, removeTodo }) => {
  const [edit, setEdit] = useState(false);
  const [finish, setFinish] = useState(completed);

  const complete = async (_id) => {
    console.log(completed);
    if (!completed) {
      await axios.patch(`/todo/${_id}`, { completed: true });
      setFinish(!completed);
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
          onClick={(e) => {
            complete();
          }}
        ></button>
      );
    }
  };

  return (
    <article className="todo">
      <h4>{name}</h4>
      <div className="btn-container">
        <CompletedButton />
        <button onClick={() => removeTodo(_id)}>delete</button>
      </div>
    </article>
  );
};

export default Todo;
