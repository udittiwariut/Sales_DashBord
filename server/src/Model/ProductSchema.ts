import mongoose, { Schema } from "mongoose";

export interface ProductInput {
	ProductId: Number;
	Name: String;
	ManufacturedCountry: String;
	Price: Number;
}

export interface ProductDocument extends ProductInput, mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}

const productSchema = new Schema(
	{
		ProductId: Number,
		Name: String,
		ManufacturedCountry: String,
		Price: Number,
	},
	{
		timestamps: true,
	}
);
productSchema.index({ ProductId: 1 });
const Product = mongoose.model<ProductDocument>("Product", productSchema);

export default Product;
