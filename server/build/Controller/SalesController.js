"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalesFigure = void 0;
const OrderSchema_1 = __importDefault(require("../Model/OrderSchema"));
const getSalesFigure = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield OrderSchema_1.default.aggregate([
        {
            $match: {
                Date: { $gte: new Date("2018-01-01"), $lt: new Date("2018-01-05") },
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
                OrderId: { $first: "$OrderId" },
                Date: { $first: "$Date" },
                Sales: {
                    $push: {
                        SaleId: "$Sales.SaleId",
                        ProductId: "$Sales.ProductId",
                        Quantity: "$Sales.Quantity",
                    },
                },
                Products: { $push: { Price: "$Product.Price" } },
            },
        },
        {
            $sort: { OrderId: 1 },
        },
    ]);
    res.status(200).json({
        order,
    });
});
exports.getSalesFigure = getSalesFigure;
//# sourceMappingURL=SalesController.js.map