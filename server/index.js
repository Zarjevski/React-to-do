// vars

const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware

app.use(express.static("../build"));
app.use(express.json());

// routes

app.use("/tasks", tasks);

// functions

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_KEY);
    app.listen(port, () => {
      console.log(`server is up and running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
