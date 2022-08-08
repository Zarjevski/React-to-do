import React, { useState } from "react";

const Form = () => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        placeholder="new"
        name="{newTodo}"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button>new</button>
    </form>
  );
};

export default Form;
