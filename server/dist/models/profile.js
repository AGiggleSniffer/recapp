"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const mongoose_1 = require("mongoose");
const ProfileSchema = new mongoose_1.Schema({
    first: { type: String, required: true },
    last: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
    phone: { type: String },
    about: { type: String },
    projects: { type: String },
    work: { type: String },
    skills: { type: String },
    education: { type: String },
}, {
    timestamps: true,
});
exports.Profile = (0, mongoose_1.model)("Profile", ProfileSchema);
