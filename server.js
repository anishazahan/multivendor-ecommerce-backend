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

app.use("/api/home", require("./routes/home/homeRoutes"));
// app.use("/api", require("./routes/order/orderRoutes"));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/home/cardRoutes"));
app.use("/api", require("./routes/home/customerAuthRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.use("/api", require("./routes/dashboard/productRoutes"));
app.use("/api", require("./routes/dashboard/sellerRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT;
dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
