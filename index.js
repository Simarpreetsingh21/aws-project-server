import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000; // Specify your desired port number here
const MONGOURL = "mongodb+srv://user1:user@testdb.0ukipwi.mongodb.net/testdb?retryWrites=true&w=majority&appName=testdb";


mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
