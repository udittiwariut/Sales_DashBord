import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import salesRouter from "./Routes/SalesRouter";
// import Sales from "./Model/SalesSchema"
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../.env` });

const url = process.env.DB_URL as string;
const port = process.env.PORT as string | number;

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use("/api/v1/order", orderRoute);
// app.use("/api/v1/product", productRoute);
// app.use("/api/v1/customers", customersRoute);
app.use("/api/v1/sales", salesRouter);

mongoose.set("strictQuery", true);
mongoose.connect(url).then(() => {
	console.log("Connection Successfull");
	// Promise.all([
	// 	Order.insertMany(dataOrder),
	// 	Product.insertMany(dataProduct),
	// 	User.insertMany(dataCustomers),
	// Sales.insertMany(dataSales),
	// ]).then(() => console.log("insertion completed"));
});

app.listen(port, () => {
	console.log(`Server is listing ${port}`);
});
