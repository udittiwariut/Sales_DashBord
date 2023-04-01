import mongoose, { Schema } from "mongoose";

export interface Order {
	OrderId: Number;
	CustomerId: Number;
	Date: Date;
}

export interface OrderDocument extends Order, mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}

const orderSchema = new Schema(
	{
		OrderId: Number,
		CustomerId: String,
		Date: Date,
	},
	{
		timestamps: true,
	}
);
orderSchema.index({ OrderId: 1 });
const Order = mongoose.model<OrderDocument>("Order", orderSchema);

export default Order;
