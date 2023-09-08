const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { dbConnect } = require("./utiles/db");

//------- global middleware----------
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

//------- production routes ----------

app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT;
dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
