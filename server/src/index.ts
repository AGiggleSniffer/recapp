import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import { profiles } from "./routes";

const app = express();
app.use(express.json());

mongoose
	.connect(process.env.MONGO_URI || "")
	.then(() => console.log("Mongo DB is Connected"))
	.catch((err) => console.log(err));

app.get("/test", (_, res) => res.send("hello"));

app.use("/api/profiles", profiles);

const port: number = Number(process.env.PORT) || 5000;
app.listen(port, () => `Server is running on port ${port}`);
