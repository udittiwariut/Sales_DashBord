"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SalesSchema = new mongoose_1.default.Schema({
    SaleId: Number,
    OrderId: Number,
    ProductId: Number,
    Quantity: Number,
}, {
    timestamps: true,
});
SalesSchema.index({ SalesId: 1 });
const Sales = mongoose_1.default.model("Sales", SalesSchema);
exports.default = Sales;
//# sourceMappingURL=SalesSchema.js.map