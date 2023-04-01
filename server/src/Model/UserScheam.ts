import mongoose, { Schema } from "mongoose";

export interface UserInput {
	CustomerId: Number;
	Active: Boolean;
	Name: String;
	Address: String;
	City: String;
	Country: String;
	Email: String;
}

export interface UserDocument extends UserInput, mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema = new Schema(
	{
		CustomerId: Number,
		Active: Boolean,
		Name: String,
		Address: String,
		City: String,
		Country: String,
		Email: String,
	},
	{ timestamps: true }
);

UserSchema.index({ CustomerId: 1 });

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
