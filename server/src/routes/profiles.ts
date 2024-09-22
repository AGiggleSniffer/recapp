import express from "express";
import { Profile } from "../models/profile";

const router = express.Router();

router.get("/", async (_, res) => {
	try {
		const profiles = await Profile.find();
		res.json(profiles);
	} catch (err) {
		res.status(404).send(err);
	}
});

export default router;
