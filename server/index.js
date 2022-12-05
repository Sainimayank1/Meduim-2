import express from "express";
import * as dotenv from 'dotenv'
// import mongoose from "mongoose"
import {connect} from "./config/db.js"
import UserRouter from "./routes/useRouter.js"
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config()

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use("/",UserRouter);

connect();


app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(process.env.PORT, () => console.log("Server is running :" + process.env.PORT))