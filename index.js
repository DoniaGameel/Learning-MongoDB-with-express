const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node API");
});

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Connected to the database!");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch(() => console.log("Connection Failed!"));
