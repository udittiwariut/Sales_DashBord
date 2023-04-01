"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_js_1 = __importDefault(require("./config.js"));
const SalesRouter_js_1 = __importDefault(require("./Routes/SalesRouter.js"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/product", productRoute);
// app.use("/api/v1/customers", customersRoute);
app.use("/api/v1/sales", SalesRouter_js_1.default);
const url = config_js_1.default.DB_URL;
mongoose_1.default.set("strictQuery", true);
mongoose_1.default.connect(url).then(() => {
    console.log("Connection Successfull");
    // Promise.all([
    // 	Order.insertMany(dataOrder),
    // 	Product.insertMany(dataProduct),
    // 	User.insertMany(dataCustomers),
    // Sales.insertMany(dataSales),
    // ]).then(() => console.log("insertion completed"));
});
app.listen(config_js_1.default.PORT, () => {
    console.log(`Server is listing on ${config_js_1.default.PORT}`);
});
//# sourceMappingURL=index.js.map