import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/connectDatabase.js";
import authenticationRouter from "./routes/authenticationRouter.js"
import groupRouter from "./routes/groupRouter.js";

const PORT = 7803;

const app = express();
app.use(cors());
app.use(express.json());
connectDatabase();

app.use("/api/user/", authenticationRouter);
app.use("/api/group/", groupRouter);

app.listen(PORT || 7803, () => {
    console.log("Listening on Port 7803");
})

app.get("/", (req, res) => {
    res.send("API is Up and Running");
})

