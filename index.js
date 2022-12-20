import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";
import router from "./router/user.js";

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(PORT, async () => {
  connect();
  console.log(`Server running ${PORT}`);
});

const connect = () => {
  try {
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("connect to DB");
    });
  } catch (error) {
    console.error("could not connnect to DB");
    process.exit(1);
  }
};
