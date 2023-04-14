import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json" assert { type: "json" };
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./src/interfaces/routes/UserRoutes.js";

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

app.use("/", userRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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
