const express = require("express");
const app = express();
mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api/auth", authRoutes); //endpoint
app.use("/api/users", userRoutes); //endpoint

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
