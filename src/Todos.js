import React from "react";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos-list">
      {todos.map((todo) => {
        return <Todo key={todo._id} {...todo} />;
      })}
    </section>
  );
};

export default Todos;
