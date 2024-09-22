"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default
    .connect(process.env.MONGO_URI || "")
    .then(() => console.log("Mongo DB is Connected"))
    .catch((err) => console.log(err));
app.get("/test", (_, res) => res.send("hello"));
app.use("/api/profiles", routes_1.profiles);
const port = Number(process.env.PORT) || 5000;
app.listen(port, () => `Server is running on port ${port}`);
