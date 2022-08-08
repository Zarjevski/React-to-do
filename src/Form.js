import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Form = ({ getData }) => {
  const [name, setName] = useState("");
  const handleSubmit = async () => {
    const createTodo = await axios.post("/todo", { name });
    setName("");
    getData();
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="create-form">
      <input
        type="text"
        placeholder="new"
        name="{name}"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        new
      </button>
    </form>
  );
};

export default Form;
