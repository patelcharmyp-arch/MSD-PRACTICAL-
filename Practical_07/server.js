require("dotenv").config();

const express = require("express");
const connectDB = require("./db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Employee Management API is running");
});

app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();