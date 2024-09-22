import { Schema, model } from "mongoose";

interface IProfile {
	first: string;
	last: string;
	email: string;
	location?: string;
	phone?: string;
	about?: string;
	projects?: string;
	work?: string;
	skills?: string;
	education?: string;
}

const ProfileSchema = new Schema<IProfile>(
	{
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
	},
	{
		timestamps: true,
	},
);

export const Profile = model<IProfile>("Profile", ProfileSchema);
