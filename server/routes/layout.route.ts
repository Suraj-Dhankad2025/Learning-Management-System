import express from "express"
import { authorizeRoles, isAuthenticated } from "../middlewares/auth";
import { createLayout } from "../controllers/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout", isAuthenticated, authorizeRoles("admin"), createLayout);

export default layoutRouter;