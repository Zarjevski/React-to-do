import React, { useEffect, useState } from "react";
import "./App.css";
import Todos from "./Todos";
import Form from "./Form";

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Form />
      <Todos todos={todos} />
    </main>
  );
};

export default App;
