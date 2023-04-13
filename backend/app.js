import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./src/interfaces/routes/UserRoutes.js";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/", userRoutes);

mongoose
  .connect(
    "mongodb+srv://mercadobitcoin:dAUVaTW6R8nvn2zD@mercadobitcoin.hxgwibi.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
