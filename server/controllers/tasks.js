const express = require("express");

const getAllTasks = (req, res) => {
  res.status(200).json({ success: true, data: "none" });
};

module.exports = {
  getAllTasks,
};
