import express from "express";
import * as dotenv from 'dotenv'
// import mongoose from "mongoose"
import { connect } from "./config/db.js"
import UserRouter from "./routes/useRouter.js"
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path'

const __dirname = path.resolve();


dotenv.config()

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use("/", UserRouter);


connect();

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "/client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

console.log(__dirname+"/client/build/index.html")


app.listen(process.env.PORT, () => console.log("Server is running :" + process.env.PORT))