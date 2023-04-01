"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SalesController_1 = require("../Controller/SalesController");
const salesRouter = (0, express_1.Router)();
salesRouter.get("/", SalesController_1.getSalesFigure);
exports.default = salesRouter;
//# sourceMappingURL=SalesRouter.js.map