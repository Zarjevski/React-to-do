import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, removeTodo }) => {
  return (
    <section className="todos-list">
      {todos.map((todo) => {
        return <Todo key={todo._id} {...todo} removeTodo={removeTodo} />;
      })}
    </section>
  );
};

export default Todos;
