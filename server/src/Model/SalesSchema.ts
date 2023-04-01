import mongoose from "mongoose";

export interface SalesDetail {
	SalesId: Number;
	OrderId: Number;
	ProductId: Number;
	Quantity: Number;
}

export interface SalesDocument extends SalesDetail, mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}

const SalesSchema = new mongoose.Schema(
	{
		SaleId: Number,
		OrderId: Number,
		ProductId: Number,
		Quantity: Number,
	},
	{
		timestamps: true,
	}
);

SalesSchema.index({ SalesId: 1 });
SalesSchema.index({ OrderId: 1 });

const Sales = mongoose.model<SalesDocument>("Sales", SalesSchema);

export default Sales;
