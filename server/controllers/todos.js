const { json } = require("express");
const Todo = require("../models/todo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json({ todos });
    if (!todos) {
      res.status(400).json({ msg: "no todos" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ id });
    res.status(200).json({ todo });
    if (!todo) {
      return res.status(404).json({ msg: `no to do with id: ${id}` });
    }
  } catch (error) {}
};

const createTodo = async (req, res) => {
  const { name } = req.body;
  try {
    const create = await Todo.create({ name });
    res
      .status(200)
      .json({ msg: `a todo with a name of ${name} was created! ` });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const remove = await Todo.findOneAndDelete({ id });
    res.status(200).json({ msg: `a to do with id: ${id} was removed` });
    if (!remove) {
      return res
        .status(404)
        .json({ msg: `there is no to do with id of: ${id}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTodo = async (req, res) => {
  const { name, completed } = req.body;
  const { id } = req.params;
  try {
    const update = await Todo.findOneAndUpdate(
      { id },
      { name: name, completed: completed }
    );
    res
      .status(200)
      .json({ success: true, msg: `the todo with id of ${id} was updated!` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
