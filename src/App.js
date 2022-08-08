import React, { useEffect, useState } from "react";
import "./App.css";
import Todos from "./Todos";
import Form from "./Form";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/todo");
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async (_id) => {
    try {
      const newTodos = todos.filter((todo) => todo._id !== _id);
      const remove = await axios.delete(`/todo/${_id}`);
      setTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Form />
      <Todos todos={todos} removeTodo={removeTodo} />
    </main>
  );
};

export default App;
