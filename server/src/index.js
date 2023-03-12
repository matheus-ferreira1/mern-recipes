import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/users.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const PORT = process.env.PORT || 3002;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => console.log(`Did not connect: ${error}`));
