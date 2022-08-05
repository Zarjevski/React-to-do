const express = require("express");
const app = express();
const port = 5000;
const todos = require("./routes/todos");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.use("/todo", todos);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
