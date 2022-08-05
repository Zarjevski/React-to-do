const Todo = require("../models/todo");

const getTodos = async (req, res) => {
  const todos = await Todo.find({});
  res.status(200).json({ todos });
  if (!todos) {
    res.status(400).json({ msg: "no todos" });
  }
};
const getTodo = (req, res) => {
  res.status(200).json({ success: true });
};
const createTodo = (req, res) => {
  res.status(200).json({ success: true });
};
const updateTodo = (req, res) => {
  res.status(200).json({ success: true });
};
const deleteTodo = (req, res) => {
  res.status(200).json({ success: true });
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
