require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./dataBase/connectDb");

const userRouter = require("./routes/user");
const taskRouter = require("./routes/task");

const PORT = process.env.PORT || 3003;
const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOption));
app.use(express.json());

app.use("/user", userRouter);
app.use("/task", taskRouter);

app.use("*", (req, res) => {
  return res.send("no url found");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
