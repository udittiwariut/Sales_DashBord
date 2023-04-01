import { Router } from "express";
import { getSalesFigure } from "../Controller/SalesController";

const salesRouter = Router();

salesRouter.get("/", getSalesFigure);

export default salesRouter;
