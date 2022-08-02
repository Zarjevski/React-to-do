const { json } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");

app.use(express.static("../build"));
app.use(express.json());
app.use("/tasks", tasks);

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
