import Sales from "../Model/SalesSchema";
import Order from "../Model/OrderSchema";
import { Request, Response } from "express";

export const getSalesFigure = async (req: Request, res: Response) => {
	try {
		const order = await Order.aggregate([
			{
				$match: {
					Date: { $gte: new Date("2018-01-01"), $lt: new Date("2019-01-01") },
				},
			},

			{
				$lookup: {
					from: "sales",
					localField: "OrderId",
					foreignField: "OrderId",
					as: "Sales",
				},
			},
			{
				$unwind: {
					path: "$Sales",
				},
			},
			{
				$lookup: {
					from: "products",
					localField: "Sales.ProductId",
					foreignField: "ProductId",
					as: "Product",
				},
			},
			{
				$unwind: {
					path: "$Product",
				},
			},
			{
				$group: {
					_id: "$OrderId",
					Date: { $first: "$Date" },
					Sales: {
						$push: {
							Quantity: "$Sales.Quantity",
						},
					},
					Products: { $push: { Price: "$Product.Price" } },
				},
			},
			{
				$sort: {
					_id: 1,
				},
			},
		]);

		res.status(200).json({
			order,
		});
	} catch (error: any) {
		res.status(400).json({
			error: error.message,
		});
	}
};
